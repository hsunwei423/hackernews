import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import Layout from 'components/Layout';
import { getBestStoryIds } from 'api/http';
import Listview from 'components/Listview';

export default function Best() {
  const [storyIds, setStoryIds] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getBestStoryIds()
      .then((res) => {
        setStoryIds(res.data);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Head>
        <title>Hacker News | Best Stories</title>
      </Head>
      <Layout>
        <Listview storyIds={storyIds} />
      </Layout>
    </>
  );
}
