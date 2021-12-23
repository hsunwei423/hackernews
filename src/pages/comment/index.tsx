import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { getStories } from 'api/http';

import Layout from 'components/Layout';
import Comment from 'components/Comment';
import Spinner from 'components/common/Spinner';
import Story from 'components/Story';

import style from './style.module.scss';
interface QueryType {
  id: string
}

const CommentPage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [idList, setIdList] = useState<string[]>([]);
  const [storyData, setStoryData] = useState({
    by: "",
    descendants: 0,
    id: 0,
    kids: [],
    score: 0,
    time: 0,
    title: "",
    type: "=",
    url: "",
  });
  const router = useRouter();
  const { id } = router.query as unknown as QueryType;

  useEffect(() => {
    const fetchCommemtIdList = () => {
      setLoading(true);
      getStories(id)
        .then(res => {
          setIdList(res.data.kids);
          setStoryData(res.data);
        })
        .catch((err) => {
          console.error(err)
        })
        .finally(() => {
          setLoading(false);
        })
    };

    if (id) {
      fetchCommemtIdList();
    }
  }, [id])

  return (
    <>
      <Head>
        <title>Hacker News | Comment</title>
      </Head>
      <Layout>
        {
          loading
            ? <Spinner />
            : <div className={style.container}>
                <Story 
                  score={storyData.score}
                  url={storyData.url}
                  title={storyData.title}
                  by={storyData.by}
                />
                <Comment idList={storyData.kids} />
              </div>
        }
      </Layout>
    </>
  )
};

export default CommentPage;
