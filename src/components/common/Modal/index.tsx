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
        <>
          <div className={style['title-wrapper']}>
            {title}
          </div>
          <div className={style.divider} />
          {children}
        </>
      </div>
    </div>
  )
};

export default Modal;
