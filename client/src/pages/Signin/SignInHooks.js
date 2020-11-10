import { useEffect } from 'react';
import { getUser } from '../User/UserReducer';
import { useUtils } from '../common';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export const useFetchUser = () => {
  const { dispatch } = useUtils();

  const params = useParams();
  console.log(params);
  const { selectedUser } = useSelector((state) => state.user);

  useEffect(() => {
    axios
      .get(`/api/users/${params.userId}`, {
        headers: { authorization: localStorage.getItem('token') },
      })
      .then((res) => {
        dispatch(getUser(res.data));
      })
      .catch((e) => console.log(e));
  }, [dispatch, params.userId]);

  return {
    selectedUser,
  };
};
