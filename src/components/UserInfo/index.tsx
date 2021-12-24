import React, { FC, useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from 'hooks/reduxHook';
import { getUserInfo } from 'api/http';
import Modal from 'components/common/Modal';
import Avatar from 'components/common/Avatar';
import Spinner from 'components/common/Spinner';

import style from './style.module.scss';

type userProp = {
  name: string,
  created: number,
  karma: number,
  about: string,
  submissions: string[] | number[]
}

const UserInfo: FC = () => {
  const { visible, userId } = useAppSelector(state => state.userInfoReducer);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [userData, setUserData] = useState<userProp>({
    name: '',
    created: 0,
    karma: 0,
    about: '',
    submissions: []
  });
  
  useEffect(() => {
    if (userId) {
      setLoading(true);
      setError(false);
      getUserInfo(userId)
        .then(res => {
          console.log(res.data)
          setUserData(res.data);
        })
        .catch(err => {
          setError(true);
        })
        .finally(() => {
          setLoading(false);
        })
    }
  }, [userId]);

  const handleSubmission = () => {
    // TODO: 
  }

  if (error) {
    return <div>No such user.</div>
  }

  if (loading) {
    return <Spinner />
  }

  return (
    <div>
      <Modal
        visible={visible}
        title={"User Info"}
      >
        <div className={style.container}>
          <div className={style['name-wrapper']}>
            <Avatar author={userData.name} />
            <div>{userData.name}</div>
          </div>
          
          <div>Created: {userData.created}</div>
          <div>Karma: {userData.karma}</div>
          <p>
            {userData.about}
          </p>
          <div onClick={handleSubmission}>submissions</div>
        </div>
      </Modal>
    </div>
  )
}

export default UserInfo;
