
import { useUtils } from "../common";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { setViewerToken } from "../Viewer";
import { setUsername, invalidCredentials } from "../User/UserReducer";

export const useFetchUser = () => {
  const { dispatch } = useUtils();
  const history = useHistory();

  const signIn = async (username, password) => {
    try {
      const res = await axios.post('/auth/signin', { username, password });
      const user = await axios.get(`/auth/userid/${username}`);

      localStorage.setItem('userId', user.data.id); // Save userId  -> Storage
      localStorage.setItem('token', res.data); // Save Token        -> Storage

      dispatch(setViewerToken(res.data)); // Sets Token             -> State
      dispatch(setCurrentUser(user.data)); // Sets Username and Id  -> State

      history.push('/dashboard');

    } catch (e) {
      console.log(e);
      // console.log(e.response.status === 401)

      if (typeof e.response !== 'undefined' && e.response.status === 401) {
        dispatch(invalidCredentials());
      }

      console.log(e);

      // Dispatch Error HERE
      // throw new Error(e);
    }
  };

  return signIn;
};
