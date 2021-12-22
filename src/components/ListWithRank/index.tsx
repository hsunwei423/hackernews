import React, { useState, FC, CSSProperties } from 'react';
import { getYear, getMonth, getDate } from 'date-fns';
import useSWR from 'swr';
import apiInstance from 'api';

import CommentWrapper from 'components/CommentWrapper';
import Comment from 'components/Comment';

import style from './style.module.scss';

const fetcher = (url: string) => apiInstance.get(url).then((res) => res.data);

type StoryProps = {
  storyId: string;
  cssStyle?: CSSProperties;
};

const ListWithRank: FC<StoryProps> = ({ storyId, cssStyle }) => {
  const [isCommentVisible, setCommentVisible] = useState(false);

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

  const handleComment = () => {
    setCommentVisible((prev) => !prev);
  };

  if (error) {
    return <div>something went wrong ...</div>;
  }

  return (
    <div>
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
            <div className={style.item}>{story?.by}</div>
            <div>•{renderTime()}</div>
            {story?.descendants && (
              <>
                <div className={style.divider} />
                <div className={style.item} onClick={handleComment}>
                  {`${story?.descendants} comments`}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {
        isCommentVisible && (
          story?.kids && <Comment idList={story?.kids} />
        )
      }
    </div>
  );
};

export default ListWithRank;
