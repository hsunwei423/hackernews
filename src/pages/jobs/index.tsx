import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import Layout from 'components/Layout';
import { getJobStoryIds } from 'api/http';
import Listview from 'components/Listview';

export default function Jobs() {
  const [storyIds, setStoryIds] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    getJobStoryIds()
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
        <title>Hacker News | Ask</title>
      </Head>
      <Layout>
        <Listview storyIds={storyIds} />
      </Layout>
    </>
  );
}
