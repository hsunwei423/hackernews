import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import Layout from 'components/Layout';
import { getAskStoryIds } from 'api/http';
import Listview from 'components/Listview';

export default function Ask() {
  const [storyIds, setStoryIds] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    getAskStoryIds()
      .then((res) => {
        setStoryIds(res.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Head>
        <title>Hacker News | Ask</title>
      </Head>
      <Layout>
        <Listview storyIds={storyIds} />
      </Layout>
    </>
  );
}
