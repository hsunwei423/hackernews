import style from './style.module.scss';

const Spinner = () => {
  return (
    <div className={style['lds-ring']} />
  )
};

export default Spinner;
