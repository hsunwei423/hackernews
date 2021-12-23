import React, { FC, ReactNode } from 'react';

import style from './style.module.scss';

interface ButtonType {
  children: ReactNode
}

const Button: FC<ButtonType> = ({ children }) => {
  return (
    <button className={style.container}>
      {children}
    </button>
  )
};

export default Button;
