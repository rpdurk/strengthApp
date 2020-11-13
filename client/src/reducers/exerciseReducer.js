import { createSlice } from '@reduxjs/toolkit';

//  Action types, Action creators, another file for your reducer
const INITIAL_STATE = {
  exercises: [],
};

// exerciseName VARCHAR(255) NOT NULL,
// musclesUsed VARCHAR(255),
// exerciseDate DATE NOT NULL,
// setTotal INT NOT NULL,
// reptitionsGoalPerSet VARCHAR(255) NOT NULL,
// reptitionsCompletedPerSet VARCHAR(255) NOT NULL,
// weightUsedPerSet VARCHAR(255) NOT NULL,
// timeUsedPerSet VARCHAR(255) NOT NULL,
// restUsedPerSet VARCHAR(255) NOT NULL,

[
  {
    // exerciseName VARCHAR(255) NOT NULL,
    // musclesUsed VARCHAR(255),
    // exerciseDate DATE NOT NULL,
    // setTotal INT NOT NULL,
    // reptitionsGoalPerSet VARCHAR(255) NOT NULL,
    // reptitionsCompletedPerSet VARCHAR(255) NOT NULL,
    // weightUsedPerSet VARCHAR(255) NOT NULL,
    // timeUsedPerSet VARCHAR(255) NOT NULL,
    // restUsedPerSet VARCHAR(255) NOT NULL,
  },
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
];

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
