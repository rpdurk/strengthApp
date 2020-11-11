import { useUtils } from '../common';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { setViewerToken } from '../Viewer';

export const useFetchUser = () => {
  const { dispatch } = useUtils();
  const history = useHistory();

  const signIn = async (username, password) => {
    try {
      const res = await axios.post('/auth/signin', { username, password });
      console.log('serve', res);
      localStorage.setItem('token', res.data);
      dispatch(setViewerToken(res.data));
      history.push('/dashboard');
    } catch (e) {
      // console.log(e.response);
      // console.log(e.response);
      // console.log(e.response);
      // console.log(e.response);
      console.log(e.response);
      // Dispatch Error HERE
      // TODO:
      // throw new Error(e);
    }
  };

  return signIn;
};
