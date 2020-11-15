import { createSlice } from '@reduxjs/toolkit';

//  Action types, Action creators, another file for your reducer
const INITIAL_STATE = {
  userBiometrics: [],
};

const userBiometricsSlice = createSlice({
  name: 'userBiometrics',
  initialState: INITIAL_STATE,

  reducers: {
    getUserBiometrics: (state, action) => {
      return { ...state, userBiometrics: action.payload };
    },
  },
});

export const { getUserBiometrics } = viewerSlice.actions;

export const userBiometricsReducer = userBiometricsSlice.reducer;