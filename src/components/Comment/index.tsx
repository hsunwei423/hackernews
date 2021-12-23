import React, { FC, useState } from 'react';
import useSWR from 'swr';
import apiInstance from 'api';

import Avatar from 'components/common/Avatar';
import Spinner from 'components/common/Spinner';

import style from './style.module.scss';

const fetcher = (url: string) => apiInstance.get(url).then(res => res.data);

type CommentProp = {
  idList: string[]
}

type SingleProp = {
  id: string
}

const LIMIT_SIZE = 2;

const SingleComment: FC<SingleProp> = ({ id }) => {
  const { data, error } = useSWR(
    `/item/${id}.json`,
    fetcher
  );
  const loading = !data && !error;

  return <Spinner />

  if (error) {
    return <div>something went wrong</div>;
  }

  return (
    <div className={style.container} key={id}>
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
}

const Comment: FC<CommentProp> = ({ idList }) => {
  const [isExpand, setExpand] = useState<boolean>(false);

  const handleExpand = () => {
    setExpand(true);
  };

  const renderList = () => {
    const len = idList.length;
    if (len > LIMIT_SIZE && !isExpand) {
      return (
        <>
          {
            idList
              .slice(0, LIMIT_SIZE)
              .map(id => <SingleComment key={id} id={id} />)
          }
          <div className={style['load-more']} onClick={handleExpand}>load more</div>
        </>
      )
    } else {
      return idList.map(id => <SingleComment key={id} id={id} />);
    }
  }

  return (
    <div className={style.wrapper}>
      { renderList() }
    </div>
  )
}

export default Comment;
