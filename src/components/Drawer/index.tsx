import React, { ReactNode, useState } from 'react';

import style from './style.module.scss';

type IProps = {
  children: ReactNode
}

const Drawer: React.FC<IProps> = ({ children }) => {
  // TODO: set drawer from redux
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <div className={`${style.container} ${isVisible && style.open}`}>
      <div className={style.mask} />
      <div className={`${style.drawer} ${isVisible && style.open}`}>{children}</div> 
    </div>
  );
}

export default Drawer;
