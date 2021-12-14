import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from 'store';

interface IState {
  isVisible: boolean
};

const initialState: IState = {
  isVisible: false
};

export const DrawerSlice = createSlice({
  name: 'DrawerSlice',
  initialState,
  reducers: {
    openDrawer: state => {
      state.isVisible = true;
    },
    closeDrawer: state => {
      state.isVisible = false;
    }
  }
});

export const { openDrawer, closeDrawer } = DrawerSlice.actions;

export const isDrawerVisible = (state: RootState) => state.DrawerSlice.isVisible;

export default DrawerSlice.reducer;
