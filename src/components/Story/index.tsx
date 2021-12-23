import React, { FC } from 'react';

import style from './style.module.scss';

type StoryProp = {
  score: number,
  url: string,
  title: string,
  by: string
}

const Story: FC<StoryProp> = ({ score, url, title, by }) => {

  return (
    <div className={style.container}>
      <div>
        <a
          className={style.title}
          href={url}
          target="_blank"
          rel='noopener noreferral'
        >
          {title}
        </a>
        <div className={style.url}>{url}</div>
      </div>

      <div className={style.detail}>
        <div>{`${score} points`}</div>
        <div>|</div>
        <div>{`by ${by}`}</div>
      </div>
    </div>
  )
};

export default Story;
