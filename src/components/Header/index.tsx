import React, { ReactElement } from 'react';
import Image from 'next/image';
import Nav from 'components/Nav';

import style from './style.module.scss';

const Header = (): ReactElement => {
  return (
    <header className={style.container}>
      <div className={style.logo}>
        <Image src="/imgs/logo.svg" width={24} height={24} />
        <span>Hacker News</span>
      </div>
      <div>
        <div className={style.burger}>
          <Image src="/imgs/menu.png" width={24} height={24} />
        </div>
        <div className={style.nav}>
          <Nav />
        </div>
      </div>
    </header>
  )
}

export default Header;