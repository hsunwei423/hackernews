import Header from 'components/Header';
import style from './layout.module.scss';

export function Layout({ children }) {
  return (
    <div className={style.container}>
      <Header />
      {children}
    </div>
  );
}

export default Layout;
