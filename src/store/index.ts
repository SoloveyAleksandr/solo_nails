import { configureStore, createSlice } from '@reduxjs/toolkit';

export interface IDayItem {
  fullDate: string,
  day: string,
  month: string,
  year: string,
  isWeekend: boolean,
  isPrevMonth: boolean,
  isNextMonth: boolean,
  isToday: boolean,
}

export interface IDay {
  fullDate: string,
  day: string,
  month: string,
  workList: IWorkItem[],
}

export interface IWorkItem {
  date: string,
  client: string,
  phone: string,
  comment: string,
}

const selectedMonth: IDayItem[] = [];
const month: number = 1;
const year: number = 2022;
const selectedDate: string = '';
const selectedDay: IDay = {
  fullDate: '',
  day: '',
  month: '',
  workList: [],
};

const AppStore = createSlice({
  name: 'AppStore',

  initialState: {
    selectedMonth,
    month,
    year,
    selectedDay,
    selectedDate,
  },

  reducers: {
    setSelectedMonth(state, action: { payload: IDayItem[] }) {
      state.selectedMonth = action.payload;
    },

    setMonth(state, action: { payload: number }) {
      state.month = action.payload;
    },

    setYear(state, action: { payload: number }) {
      state.year = action.payload;
    },

    setNextMonth(state) {
      if (state.month < 12) {
        state.month = state.month + 1;
      } else {
        state.month = 1;
        state.year = state.year + 1;
      }
    },

    setPrevMonth(state) {
      if (state.month > 1) {
        state.month = state.month - 1;
      } else {
        state.month = 12;
        state.year = state.year - 1;
      }
    },

    setSelectedDay(state, action: { payload: IDay }) {
      state.selectedDay = action.payload;
    },

    setSelectedDate(state, action: { payload: string }) {
      state.selectedDate = action.payload;
    },

  },
});

export const {
  setSelectedMonth,
  setMonth,
  setYear,
  setNextMonth,
  setPrevMonth,
  setSelectedDay,
  setSelectedDate,
} = AppStore.actions;

const store = configureStore({
  reducer: {
    AppStore: AppStore.reducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch