import React, { FC } from 'react';
import useSWR from 'swr';
import apiInstance from 'api';

import Avatar from 'components/common/Avatar';

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

  const createMarkup = () => {
    return {__html: data?.text};
  }

  return (
    <div className={style.container}>
      <Avatar author={data?.by} />
      <div className={style.content}>
        <div className={style.name}>{data?.by}</div>
        <div dangerouslySetInnerHTML={createMarkup()} />
        <div className={style.name}>reply to</div>
      </div>
    </div>
  )
}

export default Comment;
