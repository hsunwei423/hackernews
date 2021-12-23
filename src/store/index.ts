import { configureStore } from '@reduxjs/toolkit';
import DrawerSlice from 'reducers/drawer';
import UserInfoSlice from 'reducers/userInfo';

export const store = configureStore({
  reducer: {
    drawerReducer: DrawerSlice,
    userInfoReducer: UserInfoSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;