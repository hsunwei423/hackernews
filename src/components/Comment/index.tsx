import React, { FC } from 'react';
import useSWR from 'swr';
import apiInstance from 'api';

import Avatar from 'components/common/Avatar';

import style from './style.module.scss';

const fetcher = (url: string) => apiInstance.get(url).then(res => res.data);

type CommentProp = {
  idList: string[]
}

const Comment: FC<CommentProp> = ({ idList }) => {
  const renderComment = (id: string) => {
    const { data, error } = useSWR(
      `/item/${id}.json`,
      fetcher
    );

    if (error) {
      return 'something went wrong';
    }

    return (
      <div className={style.container}>
        <Avatar author={data?.by} />
        <div className={style.content}>
          <span className={style.name}>{data?.by}</span>
          <div className={style.htmlContent} dangerouslySetInnerHTML={{__html: data?.text}} />
          <div className={`${style.name} ${style.reply}`}>reply to</div>

          {/** children comment */}
          {
            data?.kids && <Comment idList={data?.kids} />
          }
        </div>
      </div>
    )
  };

  return (
    <div className={style.wrapper}>
      {
        idList.map(id => {
          return renderComment(id);
        })
      }
    </div>
  )
}

export default Comment;
