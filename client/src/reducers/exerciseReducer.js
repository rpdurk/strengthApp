import { createSlice } from '@reduxjs/toolkit';

//  Action types, Action creators, another file for your reducer
const INITIAL_STATE = {
  exercises: [],
};

const exerciseSlice = createSlice({
  name: 'exercise',
  initialState: INITIAL_STATE,

  reducers: {
    getExercises: (state, action) => {
      return { ...state, exercises: action.payload };
    },
  },
});

export const { getExercises } = viewerSlice.actions;

export const exerciseReducer = exerciseSlice.reducer;
