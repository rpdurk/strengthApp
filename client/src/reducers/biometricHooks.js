import { useUtils } from '../common';
import axios from 'axios';
import userBiometricReducer from './biometricReducer';

export const usefetchUserBiometrics = () => {
  const { dispatch } = useUtils();

  const fetchUserBiometrics = async () => {
    try {
      const res = await axios.post('/', { username, password });

      console.log('serve', res);
      localStorage.setItem('token', res.data);
      dispatch(setViewerToken(res.data));
      dispatch(setUsername(username));
      history.push('/dashboard');
    } catch (e) {
      // console.log(e.response.status === 401)

      if (e.response.status === 401) {
        dispatch(invalidCredentials());
      }

      // Dispatch Error HERE
      // TODO:
      // throw new Error(e);
    }
  };

  return fetchUserBiometrics;
};