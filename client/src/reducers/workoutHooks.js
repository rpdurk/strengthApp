import { useUtils } from '../common';
import axios from 'axios';
import workoutReducer from './workoutReducer';

export const usefetchWorkouts = () => {
  const { dispatch } = useUtils();

  const fetchWorkouts = async () => {
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

  return fetchWorkouts;
};