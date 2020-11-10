import axios from 'axios';

// Create a user
export const useCreateUser = () => {
  const handleSaveUser = (formValues) => {
    // console.log(formValues);
    axios.post('/auth/signup', formValues).then((res) => {
      console.log('response 👇');
      console.log(res);
    });
  };

  return handleSaveUser;
};
