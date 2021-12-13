import React, { ReactElement, useState } from 'react';
import Nav from 'components/Nav';
import Drawer from 'components/Drawer';

import style from './style.module.scss';

const Header = (): ReactElement => {
  const [showDrawer, setShowDrawer] = useState<boolean>(false);
  const handleDrawer = () => {
    console.log('c!!!')
    setShowDrawer(prev => !prev);
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
          <Drawer isVisible={showDrawer}>
            1231312312312312312321
          </Drawer>
        </div>
        <div className={style.nav}>
          <Nav />
        </div>
      </div>
    </header>
  )
}

export default Header;