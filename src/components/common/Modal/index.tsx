import React, { FC, ReactNode, useEffect } from 'react';

import Button from 'components/common/Button';

import style from './style.module.scss';

interface ModalProp  {
  visible: boolean
  title?: string | ReactNode
  children: ReactNode
  onOk?: () => void
  onCancel?: () => void
  okText?: string | ReactNode
  cancelText?: string | ReactNode
}

const Modal: FC<ModalProp> = ({
    visible,
    title,
    children,
    onOk,
    onCancel,
    okText,
    cancelText
  }) => {

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'auto';
    }
  }, [visible]);

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
          <Button onClick={onOk}>{okText || 'OK'}</Button>
          <Button
            type="simple"
            onClick={onCancel}
          >
            {cancelText || 'Cancel'}
          </Button>
        </div>
      </div>
    </div>
  )
};

export default Modal;
