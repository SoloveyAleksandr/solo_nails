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

const selectedMonth: IDayItem[] = [];
const month: number = 1;
const year: number = 2022;

const AppStore = createSlice({
  name: 'AppStore',

  initialState: {
    selectedMonth,
    month,
    year,
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

    setNextYear(state) {
      state.year = state.year + 1;
    },

    setPrevYear(state) {
      state.year = state.year - 1;
    },
  },
});

export const {
  setSelectedMonth,
  setMonth,
  setYear,
  setNextMonth,
  setPrevMonth,
  setNextYear,
  setPrevYear,
} = AppStore.actions;

const store = configureStore({
  reducer: {
    AppStore: AppStore.reducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch