import Link from 'next/link';
import Header from 'components/Header';
import Drawer from 'components/Drawer';

import { ROUTE_LIST } from 'consts';

import style from './layout.module.scss';

export function Layout({ children }) {

  const renderRouteList = () => {
    return (
      <div className={style['link-container']}>
        {
          ROUTE_LIST.map(d => (
            <Link key={d.name} href={d.href}>
              <a className={style.item}>{d.name}</a>
            </Link>
          ))
        }
      </div>
    )
  };

  return (
    <div className={style.container}>
      <Header />
      <Drawer>
        {renderRouteList()}
      </Drawer>
      {children}
    </div>
  );
}

export default Layout;
