import Link from 'next/link';
import { useRouter } from 'next/router';

import Header from 'components/Header';
import Drawer from 'components/Drawer';

import { ROUTE_LIST } from 'consts';

import style from './layout.module.scss';

export function Layout({ children }) {
  const router = useRouter();

  const renderRouteList = () => {
    const currentPath = router.pathname;
    return (
      <div className={style['link-container']}>
        {
          ROUTE_LIST.map(d => (
            <Link key={d.name} href={d.href}>
              <a
                className={`${style.item} ${currentPath === d.href && style.active}`}
              >
                {d.name}
              </a>
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
