import { useRouter } from 'next/router';
import Link from 'next/link';

type styleType = {
  marginRight: number;
  color: string;
  fontSize: number;
  fontWeight: number;
};

function ActiveRouter({ children, href }) {
  const router = useRouter();
  const style: styleType = {
    marginRight: 40,
    color: '#2E2E2E',
    fontSize: 16,
    fontWeight: router.pathname === href ? 500 : 350,
  };

  return (
    <Link href={href}>
      <a style={style}>
        {children}
      </a>
    </Link>
  );
}

export default ActiveRouter;
