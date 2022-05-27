import { configureStore, createSlice } from '@reduxjs/toolkit';

export interface ITodosList {
  id: string;
  title: string;
  todos: ITodo[];
}

export interface ITodo {
  id: string,
  title: string,
  isDone: boolean,
}

const currentTodos: ITodosList = {
  id: '',
  title: '',
  todos: [],
};

const myTodosList: ITodosList[] = [];

const AppStore = createSlice({
  name: 'AppStore',

  initialState: {
    currentTodos,
    myTodosList,
  },

  reducers: {},
});

export const {
} = AppStore.actions;

const store = configureStore({
  reducer: {
    AppStore: AppStore.reducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch