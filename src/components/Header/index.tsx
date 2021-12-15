import React from 'react';
import { useRouter } from 'next/router';
import Nav from 'components/Nav';

import { useAppDispatch } from 'hooks/reduxHook';
import { openDrawer } from 'reducers/drawer';

import style from './style.module.scss';

const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleDrawer = () => {
    dispatch(openDrawer());
  };

  const gotoNew = () => {
    router.push('/new');
  };

  return (
    <header className={style.container}>
      <div className={style.logo} onClick={gotoNew}>
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