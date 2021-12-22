import { FC } from 'react';

import style from './style.module.scss';

type AvatarProp = {
  author: string
};

const colorList = [
  '#38bdf8',
  '#60a5fa',
  '#818cf8',
  '#a78bfa',
  '#c084fc',
  '#f472b6',
  '#fb7185',
  '#2dd4bf',
  '#a3e635',
  '#facc15',
  '#fb923c'
];

const Avatar: FC<AvatarProp> = ({ author = 'A' }) => {

  const getFirstLetter = () => {
    return author.charAt(0) || '';
  };

  const genRandomColor = () => {
    const idx = Math.floor(Math.random() * colorList.length);
    return {
      backgroundColor: colorList[idx]
    }
  };

  return (
    <div className={style.container} style={genRandomColor()}>
      {getFirstLetter()}
    </div>
  )
};

export default Avatar;
