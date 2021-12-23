import React, { FC, ReactNode } from 'react';

import Button from 'components/common/Button';

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
        <div className={style.header}>
          {title}
        </div>

        <div className={style.main}>
          {children}
        </div>
        
        <div className={style.footer}>
          <Button>Cancel</Button>
        </div>
      </div>
    </div>
  )
};

export default Modal;
