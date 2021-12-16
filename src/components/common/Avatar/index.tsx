import { FC } from 'react';

import style from './style.module.scss';

type AvatarProp = {
  author: string
};

const Avatar: FC<AvatarProp> = ({ author = 'A' }) => {

  const getFirstLetter = () => {
    return author.charAt(0) || '';
  }

  return (
    <div className={style.container}>
      {getFirstLetter()}
    </div>
  )
};

export default Avatar;
