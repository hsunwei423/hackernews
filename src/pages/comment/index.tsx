import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { getStories } from 'api/http';

import Layout from 'components/Layout';
import Comment from 'components/Comment';
import Spinner from 'components/common/Spinner';
interface QueryType {
  id: string
}

const CommentPage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [idList, setIdList] = useState<string[]>([]);
  const router = useRouter();
  const { id } = router.query as unknown as QueryType;

  useEffect(() => {
    const fetchCommemtIdList = () => {
      setLoading(true);
      getStories(id)
        .then(res => {
          setIdList(res.data.kids);
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
            : <Comment idList={idList} />
        }
      </Layout>
    </>
  )
};

export default CommentPage;
