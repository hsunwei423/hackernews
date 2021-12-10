import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import Layout from 'components/Layout';
import { getShowStoryIds } from 'api/http';
import Listview from 'components/Listview';

export default function Show() {
  const [storyIds, setStoryIds] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getShowStoryIds()
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
