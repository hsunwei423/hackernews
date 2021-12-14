import Header from 'components/Header';
import Drawer from 'components/Drawer';

import style from './layout.module.scss';

export function Layout({ children }) {
  return (
    <div className={style.container}>
      <Header />
      <Drawer>
        123
      </Drawer>
      {children}
    </div>
  );
}

export default Layout;
