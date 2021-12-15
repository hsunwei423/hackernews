import React, { ReactNode } from 'react';
import { useAppSelector, useAppDispatch } from 'hooks/reduxHook';
import { closeDrawer } from 'reducers/drawer';

import style from './style.module.scss';

type DrawerProps = {
  children: ReactNode
}

const Drawer: React.FC<DrawerProps> = ({ children }) => {
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
