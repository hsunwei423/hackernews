import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import Layout from 'components/Layout';
import { getBestStoryIds } from 'api/http';
import Story from 'components/Story';
import { Pagination } from 'antd';

export default function Best() {
  const [storyIds, setStoryIds] = useState([]);
  const [index, setIndex] = useState(0);
  const [page, setPage] = useState(1);
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

  const handlePage = (page: number, pageSize: number) => {
    setIndex(page * 10 - 10);
    setPage(page);

    // page 1: 0 ~ 9
    // page 2: 10 ~ 19
  };

  return (
    <>
      <Head>
        <title>Hacker News | Best Stories</title>
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
