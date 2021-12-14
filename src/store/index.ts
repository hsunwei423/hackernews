import { configureStore } from '@reduxjs/toolkit';
import DrawerSlice from 'reducers/drawer';

export const store = configureStore({
  reducer: {
    drawerReducer: DrawerSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;