import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from 'store';

interface IState {
  visible: boolean,
  userId: string
};

const initialState: IState = {
  visible: false,
  userId: ''
};

export const UserInfoSlice = createSlice({
  name: 'UserInfoSlice',
  initialState,
  reducers: {
    openUserModal: (state, action) => {
      const { userId } = action.payload
      state.visible = true;
      state.userId = userId;
    },
    closeUserModal: state => {
      state.visible = false;
      state.userId = '';
    }
  }
});

export const { openUserModal, closeUserModal } = UserInfoSlice.actions;

export default UserInfoSlice.reducer;