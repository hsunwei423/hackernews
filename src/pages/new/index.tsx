import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import Layout from 'components/Layout';
import { getNewStoryIds, getStories } from 'api/http';
import Story from 'components/Story';
import Listview from 'components/Listview';
import { Pagination } from 'antd';

import style from './style.module.scss';

export default function New() {
  const [storyIds, setStoryIds] = useState<string[]>([]);
  const [currentIds, setCurrentIds] = useState<string[]>([]);
  const [index, setIndex] = useState<number>(0);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    getNewStoryIds().then((res) => {
      setStoryIds(res.data);
      setCurrentIds(res.data.slice(0, 10));
    });
  }, []);

  const handlePage = (page: number, pageSize: number) => {
    setIndex(page * 10 - 10);
    setPage(page);

    // page 1: 0 ~ 9
    // page 2: 10 ~ 19
  };

  return (
    <>
      <Head>
        <title>Hacker News | New</title>
      </Head>
      <Layout>
        <Listview
          storyIds={currentIds}
        />
      </Layout>
    </>
  );
}
