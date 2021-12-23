import React, { FC } from 'react';

import Modal from 'components/common/Modal';

import style from './style.module.scss';

const UserInfo: FC = () => {
  // TODO: open modal from redux

  return (
    <div>
      <Modal
        visible={true}
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
