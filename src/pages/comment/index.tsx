import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getStories } from 'api/http';

import Comment from 'components/Comment';

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

  // TODO: add loading spinner
  return (
    <>
      <Comment idList={idList} />
    </>
  )
};

export default CommentPage;
