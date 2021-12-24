import React, { FC, ReactNode } from 'react';

import style from './style.module.scss';

interface ButtonType {
  children: ReactNode,
  onClick?: () => void,
  type?: 'normal' | 'danger' | 'simple'
}

const Button: FC<ButtonType> = ({
  children,
  type = 'normal',
  onClick
}) => {
  return (
    <button
      className={
        `${style.container} ${
          type === 'danger' && style.danger
        } ${
            type === 'simple' && style.simple
          }`
      }
      onClick={onClick}
    >
      {children}
    </button>
  )
};

export default Button;
