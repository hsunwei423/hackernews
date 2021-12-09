import { useEffect } from 'react';
import Head from 'next/head'
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/new');    
  }, []);
  
  return (
    <div className="container">
      <Head>
        <title>Hacker News</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main></main>
    </div>
  )
}
