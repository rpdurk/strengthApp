import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  users: [],
  selectedUser: {
    id: '',
    username: '',
  },
  curUsername: null,
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
    setCurrentUser: (state, action) => {
      console.log();
      return {
        ...state,
        curUserId: action.payload.id,
        curUsername: action.payload.username,
      };
    },
    setUserId: (state, action) => ({ ...state, curUserId: action.payload }),
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
  setUserId,
  getUsers,
  getUser,
  setCurrentUser,
  invalidCredentials,
  validCredentials,
} = userSlice.actions;

export const userReducer = userSlice.reducer;
