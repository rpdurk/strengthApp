import axios from 'axios';
import { useHistory } from 'react-router-dom';
// Create a user
import { useDispatch } from 'react-redux';
import { setViewerToken } from '../Viewer';
export const useCreateUser = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSaveUser = (formValues) => {
    // console.log(formValues);
    axios.post('/auth/signup', formValues).then((res) => {
      console.log('response 👇');
      console.log(res.data);
      dispatch(setViewerToken(res.data));
      history.push('/dashboard');
    });
  };

  return handleSaveUser;
};
