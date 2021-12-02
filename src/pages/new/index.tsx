import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import Layout from 'components/Layout';
import { getNewStoryIds, getStories } from 'api/http';
import Story from 'components/Story';
import { Pagination } from 'antd';

export default function New() {
  const [storyIds, setStoryIds] = useState<string[]>([]);
  const [index, setIndex] = useState<number>(0);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    getNewStoryIds().then((res) => {
      setStoryIds(res.data);
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
        {storyIds.slice(index, index + 10).map((e, index) => (
          <Story key={index} storyId={e} />
        ))}
        {storyIds.length != 0 && (
          <Pagination
            style={{
              alignContent: 'center',
            }}
            total={50}
            pageSize={9}
            current={page}
            onChange={handlePage}
          />
        )}
      </Layout>
    </>
  );
}
