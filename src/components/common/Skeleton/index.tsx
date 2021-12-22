import React, { FC, ReactNode } from 'react';

import style from './style.module.scss';

type Props = {
  children: ReactNode,
  loading: boolean
}

const Skeleton: FC<Props> = ({ children, loading = false }) => {
  if (loading) {
    return (
      <div className={style.container}>
        <div className={style['skeleton-paragraph']} />
        <div className={`${style['skeleton-paragraph']} ${style.short}`} />
      </div>
    )
  }

  return (
    <>
      {children}
    </>
  )
};

export default Skeleton;
