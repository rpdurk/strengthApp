import { createSlice } from '@reduxjs/toolkit';

//  Action types, Action creators, another file for your reducer
const INITIAL_STATE = {
  workouts: [],
};

const workoutSlice = createSlice({
  name: 'workout',
  initialState: INITIAL_STATE,

  reducers: {
    getWorkouts: (state, action) => {
      return { ...state, workouts: action.payload };
    },
  },
});

export const { getWorkouts } = viewerSlice.actions;

export const workoutsReducer = workoutsSlice.reducer;