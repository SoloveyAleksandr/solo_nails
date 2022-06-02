import { configureStore, createSlice } from '@reduxjs/toolkit';

export interface IDay {
  fullDate: string;
  day: string;
  month: string;
  year: string;
  isWeekend: boolean;
}

const currentMonth: IDay[] = [];

const AppStore = createSlice({
  name: 'AppStore',

  initialState: {
    currentMonth,
  },

  reducers: {
    setCurrentMonth(state, action: { payload: IDay[] }) {
      state.currentMonth = action.payload;
    },
  },
});

export const {
  setCurrentMonth,
} = AppStore.actions;

const store = configureStore({
  reducer: {
    AppStore: AppStore.reducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch