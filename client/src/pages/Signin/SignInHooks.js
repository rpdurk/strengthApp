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
      const res = await axios.post("/auth/signin", { username, password });
      // const userId = await axios.post('/');
      console.log("serve", res);
      localStorage.setItem("token", res.data);
      dispatch(setViewerToken(res.data));
      dispatch(setUsername(username));
      history.push("/dashboard");
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

  return signIn;
};
