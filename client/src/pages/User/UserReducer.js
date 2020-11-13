import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  users: [],
  selectedUser: {
    id: '',
    username: '',
  },
  curUsername: '',
  curUserId: null,
  moreState: false,
  credentialError: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    getUsers: (state, action) => ({
      ...state,
      users: action.payload,
    }),
    getUser: (state, action) => ({ ...state, selectedUser: action.payload }),
    setUsername: (state, action) => {
      return { ...state, curUsername: action.payload };
    },
    setUserId: (state, action) => {
      return { ...state, curUserId: action.payload };
    },
    invalidCredentials: (state, action) => ({
      ...state,
      credentialError: true,
    }),
    validCredentials: (state, action) => ({
      ...state,
      credentialError: false,
    }),
  },
});

export const {
  getUsers,
  getUser,
  setUserId,
  setUsername,
  invalidCredentials,
  validCredentials,
} = userSlice.actions;

export const userReducer = userSlice.reducer;
