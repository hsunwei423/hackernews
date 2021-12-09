import Header from 'components/Header';
import style from './layout.module.scss';

export function Layout({ children }) {
  return (
    <div className={style.container}>
      <Header />
      <div className={style.title}>Hacker News</div>
      {children}
    </div>
  );
}

export default Layout;
