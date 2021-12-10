import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import Layout from 'components/Layout';
import { getNewStoryIds } from 'api/http';
import Listview from 'components/Listview';

import style from './style.module.scss';

export default function New() {
  const [storyIds, setStoryIds] = useState<string[]>([]);

  useEffect(() => {
    getNewStoryIds().then((res) => {
      setStoryIds(res.data);
    });
  }, []);

  return (
    <>
      <Head>
        <title>Hacker News | New</title>
      </Head>
      <Layout>
        <Listview
          storyIds={storyIds}
        />
      </Layout>
    </>
  );
}
