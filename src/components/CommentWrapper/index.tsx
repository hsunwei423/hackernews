import { FC, ReactNode } from 'react'; 
import style from './style.module.scss';

type CommentWrapperProp = {
  children: ReactNode
};

const CommentWrapper: FC<CommentWrapperProp> = ({ children }) => {
  return (
    <div className={style.container}>
      {children}
    </div>
  )
}

export default CommentWrapper;
