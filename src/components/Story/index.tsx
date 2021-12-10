import React, { useEffect, useState } from 'react';
import { getStories } from 'api/http';
import { Skeleton } from 'antd';
import { getYear, getMonth, getDate } from 'date-fns';

import style from './style.module.scss';

export function Story({ storyId, cssStyle }) {
  const [story, setStory] = useState({
    by: '',
    descendants: '',
    time: 0,
    id: 0,
    score: 0,
    title: '',
    url: '',
    type: '',
    kids: [],
  });
  const [time, setTime] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getStories(storyId)
      .then((res) => {
        setStory(res.data);
        // set time
        const timestamp = res.data.time * 1000;
        const date = new Date(timestamp);
        const timestring = `${getMonth(timestamp)}, ${getDate(
          timestamp
        )} - ${date.toLocaleString('en', { weekday: 'short' })}, ${getYear(
          timestamp
        )}`;
        setTime(timestring);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [storyId]);

  return (
    <div className={style.container} style={cssStyle}>
      <Skeleton loading={loading} active>
        <div className={style['time-container']}>
          <div>{time}</div>
          <div>•</div>
          <div>{story.by}</div>
        </div>
        <a
          className={style.link}
          href={story.url}
          target="_blank"
          rel="noreferrer noopener"
        >
          {story.title}
        </a>
        <hr className={style.divider} />
      </Skeleton>
    </div>
  );
}

export default Story;
