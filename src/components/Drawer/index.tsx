import React, { ReactNode, useState } from 'react';
import { useAppSelector, useAppDispatch } from 'hooks/reduxHook';
import { closeDrawer } from 'reducers/drawer';

import style from './style.module.scss';

type IProps = {
  children: ReactNode
}

const Drawer: React.FC<IProps> = ({ children }) => {
  const dispatch = useAppDispatch();
  const isVisible = useAppSelector(state => state.drawerReducer.isVisible);

  const handleClose = () => {
    dispatch(closeDrawer());
  };

  return (
    <div className={`${style.container} ${isVisible && style.open}`}>
      <div className={`${style.mask} ${isVisible && style.open}`} onClick={handleClose} />
      <div className={`${style.drawer} ${isVisible && style.open}`}>{children}</div> 
    </div>
  );
}

export default Drawer;
