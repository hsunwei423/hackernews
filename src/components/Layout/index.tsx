import Nav from 'components/Nav';
import style from './layout.module.scss';

export function Layout({ children }) {
  return (
    <div className={style.container}>
      <Nav />
      <div className={style.title}>Hacker News</div>
      <div className={style.content}>{children}</div>
    </div>
  );
}

export default Layout;
