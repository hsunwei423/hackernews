import React, { FC, ReactNode } from 'react';

import style from './style.module.scss';

interface ModalProp  {
  visible: boolean,
  title?: string | ReactNode
  children: ReactNode
}

const Modal: FC<ModalProp> = ({ visible, title, children }) => {
  return (
    <div className={`${style.container} ${!visible && style.hide}`}>
      <div className={style.content}>
        {children}
      </div>
    </div>
  )
};

export default Modal;
