import React, { FC } from 'react';
import { useAppSelector, useAppDispatch } from 'hooks/reduxHook';

import Modal from 'components/common/Modal';

import style from './style.module.scss';

const UserInfo: FC = () => {
  const visible = useAppSelector(state => state.userInfoReducer.visible);

  return (
    <div>
      <Modal
        visible={visible}
        title={"User Info"}
      >
        <div>
          123123123123
        </div>
      </Modal>
    </div>
  )
}

export default UserInfo;
