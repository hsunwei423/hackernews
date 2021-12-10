import React from 'react';
import { getYear, getMonth, getDate } from 'date-fns';
import useSWR from 'swr';
import apiInstance from 'api';

import { Skeleton } from 'antd';

import style from './style.module.scss';

const fetcher = url => apiInstance.get(url).then(res => res.data);

export function Story({ storyId, cssStyle }) {
  const { data: story, error } = useSWR(
    `/item/${storyId}.json`,
    fetcher
  );
  const loading = !story && !error;

  const renderTime = () => {
    if (!story?.time) {
      return '-'
    }
    const timestamp = story.time * 1000;
    const date = new Date(timestamp);
    return `${getMonth(timestamp)}, ${getDate(
      timestamp
    )} - ${date.toLocaleString('en', { weekday: 'short' })}, ${getYear(
      timestamp
    )}`;
  };

  if (error) {
    return 'something went wrong ...';
  }

  return (
    <div className={style.container} style={cssStyle}>
      <Skeleton loading={loading} active>
        <div className={style['time-container']}>
          {`${renderTime()} • ${story?.by}`}
        </div>
        <a
          className={style.link}
          href={story?.url}
          target="_blank"
          rel="noreferrer noopener"
        >
          {story?.title}
        </a>
        <hr className={style.divider} />
      </Skeleton>
    </div>
  );
}

export default Story;
