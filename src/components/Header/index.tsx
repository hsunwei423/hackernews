import React, { ReactElement } from 'react';
import Nav from 'components/Nav';

import { useAppDispatch } from 'hooks/reduxHook';
import { openDrawer } from 'reducers/drawer';

import style from './style.module.scss';

const Header = (): ReactElement => {
  const dispatch = useAppDispatch();
  const handleDrawer = () => {
    dispatch(openDrawer());
  };

  return (
    <header className={style.container}>
      <div className={style.logo}>
        <img src="imgs/logo.svg" width={24} height={24} className={style.img}/>
        <span>Hacker News</span>
      </div>
      <div>
        <div className={style.burger}>
          <img
            src="imgs/menu.png"
            width={24}
            height={24}
            className={style.img}
            onClick={handleDrawer}
          />
        </div>
        <div className={style.nav}>
          <Nav />
        </div>
      </div>
    </header>
  )
}

export default Header;