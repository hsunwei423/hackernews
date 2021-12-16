import React, { FC, ReactNode } from 'react';
import useSWR from 'swr';
import apiInstance from 'api';

import style from './style.module.scss';

const fetcher = (url: string) => apiInstance.get(url).then(res => res.data);

type CommentProp = {
  id: string
}

const Comment: FC<CommentProp> = ({ id }) => {
  const { data, error } = useSWR(
    `/item/${id}.json`,
    fetcher
  );
  console.log('comment', data);

  return (
    <div className={style.container}>
    </div>
  )
}

export default Comment;
