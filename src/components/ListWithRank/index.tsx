import React, { useState, FC, CSSProperties } from 'react';
import { useRouter } from 'next/router';
import { getYear, getMonth, getDate } from 'date-fns';
import useSWR from 'swr';
import apiInstance from 'api';
import { useAppDispatch } from 'hooks/reduxHook';
import { openUserModal } from 'reducers/userInfo';

import Skeleton from 'components/common/Skeleton';

import style from './style.module.scss';

const fetcher = (url: string) => apiInstance.get(url).then((res) => res.data);

type StoryProps = {
  storyId: string;
  cssStyle?: CSSProperties;
};

const ListWithRank: FC<StoryProps> = ({ storyId, cssStyle }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const { data: story, error } = useSWR(`/item/${storyId}.json`, fetcher);
  const loading = !story && !error;

  const renderTime = (): string => {
    if (!story?.time) {
      return '-';
    }
    const timestamp = story.time * 1000;
    const date = new Date(timestamp);
    return `${getMonth(timestamp)}/${getDate(
      timestamp
    )} - ${date.toLocaleString('en', { weekday: 'short' })}, ${getYear(
      timestamp
    )}`;
  };

  const gotoComment = () => {
    router.push({
      pathname: '/comment',
      query: {
        id: storyId
      }
    })
  };

  const handleOpenUserInfo = () => {
    dispatch(openUserModal({
      userId: story.by
    }));
  }

  if (error) {
    return <div>something went wrong ...</div>;
  }

  return (
    <Skeleton loading={loading}>
      <div className={style.container}>
        <div className={style.rank}>
          <img src="imgs/arrow-up.svg" alt="arrow" />
          <div>{story?.score}</div>
        </div>
        <div>
          <a className={style.link} href={story?.url} target="_blank">
            {story?.title}
          </a>
          <div className={style.detail}>
            <div className={style.item} onClick={handleOpenUserInfo}>{story?.by}</div>
            <div>•{renderTime()}</div>
            {story?.descendants && (
              <>
                <div className={style.divider} />
                <div className={style.item} onClick={gotoComment}>
                  {`${story?.descendants} comments`}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </Skeleton>
  );
};

export default ListWithRank;
