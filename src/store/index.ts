import { configureStore, createSlice } from '@reduxjs/toolkit';

export interface IDayItem {
  fullDate: string,
  day: string,
  month: string,
  year: string,
  isWeekend: boolean,
}

export interface IDay {
  isOpen: boolean,
  date: string,
}

const currentMonth: IDayItem[] = [];
const currentDay: IDay = {
  isOpen: false,
  date: '',
}

const AppStore = createSlice({
  name: 'AppStore',

  initialState: {
    currentMonth,
    currentDay,
  },

  reducers: {
    setCurrentMonth(state, action: { payload: IDayItem[] }) {
      state.currentMonth = action.payload;
    },

    setCurrentDay(state, action: { payload: IDay }) {
      state.currentDay = action.payload;
    }
  },
});

export const {
  setCurrentMonth,
  setCurrentDay,
} = AppStore.actions;

const store = configureStore({
  reducer: {
    AppStore: AppStore.reducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch