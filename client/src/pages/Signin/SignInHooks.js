import { useEffect } from 'react';
import { getUser } from '../User/UserReducer';
import { useUtils } from '../common';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

export const useFetchUser = () => {
  const { dispatch } = useUtils();
  const history = useHistory();
  const params = useParams();

  console.log(params);
  const { selectedUser } = useSelector((state) => state.user);
  const setSignIn = (username, password) => {
    axios
      .get(`/api/users/${params.userId}`, {
        headers: { authorization: localStorage.getItem('token') },
      })
      .then((res) => {
        dispatch(getUser(res.data));
        history.push();
      })
      .catch((e) => console.log(e));
  };

  return {
    selectedUser,
  };
};
