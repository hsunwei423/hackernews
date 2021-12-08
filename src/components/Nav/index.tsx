import Link from 'next/link';
import { useRouter } from 'next/router';

import style from './style.module.scss';

const ROUTE_LIST = [
  {
    href: '/new',
    name: 'New'
  },
  {
    href: '/top',
    name: 'Top Stories'
  },
  {
    href: '/best',
    name: 'Best Stories'
  },
  {
    href: '/ask',
    name: 'Ask'
  },
  {
    href: '/jobs',
    name: 'Jobs'
  },
  {
    href: '/show',
    name: 'Show'
  },
]

export default function Nav():JSX.Element {
  const router = useRouter();

  return (
    <nav className={style.container}>
      {
        ROUTE_LIST.map(d => (
          <Link key={d.name} href={d.href}>
            <a className={`${style.link} ${router.pathname === d.href && style.active}`}>{d.name}</a>
          </Link>
        ))
      }
    </nav>
  );
}
