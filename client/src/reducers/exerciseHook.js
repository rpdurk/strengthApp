import { useUtils } from '../common';
import axios from 'axios';
import exerciseReducer from './exerciseReducer';

export const usefetchExercises = () => {
  const { dispatch } = useUtils();

  const fetchExercises = async () => {
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

  return fetchExercises;
};
