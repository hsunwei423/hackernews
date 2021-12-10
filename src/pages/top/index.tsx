import Head from 'next/head';
import Layout from 'components/Layout';
import React, { useState, useEffect } from 'react';
import { getTopStoryIds } from 'api/http';
import Listview from 'components/Listview';

export default function Top() {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getTopStoryIds().then((res) => {
      setStoryIds(res.data);
    });
  }, []);

  return (
    <>
      <Head>
        <title>Hacker News | Top</title>
      </Head>
      <Layout>
        <Listview storyIds={storyIds} />
      </Layout>
    </>
  );
}
