const {
  findAllWorkoutsByUserId,
  findWorkoutByIdQuery,
  findWorkoutByWorkoutName,
  insertWorkout,
  deleteWorkoutQuery,
} = require('./workoutQueries');

const connection = require('../config/connection');

/**
 *
 * @param {Number} userId - Gets Exercises by user ID from SQL DB.
 */

 const getAllWorkoutsByUserId = async (userId) => {
   try {
    const [firstRow] = await connection.query(findAllWorkoutsByUserId, userId);
    return firstRow;
   } catch (err) {
     if (err) console.error(err);
     throw new Error(err);
   }
 };

 /**
 *
 * @param {Number} workoutId - Gets Exercises by user ID from SQL DB.
 */

const getWorkoutsIdQuery = async (workoutId) => {
  try {
   const [results] = await connection.query(
     findWorkoutByIdQuery, 
      workoutId
    );
   return results;
  } catch (err) {
    if (err) console.error(err);
    throw new Error(err);
  }
};

 /**
 *
 * @param {String} workoutName - Gets workout by name from SQL DB.
 */

const getWorkoutByWorkoutName = async (workoutName) => {
  try {
   const [results] = await connection.query(
     findWorkoutByWorkoutName, 
      workoutName
    );
   return results;
  } catch (err) {
    if (err) console.error(err);
    throw new Error(err);
  }
};

/**
 * Takes in an exercise Object which must contain all of the following. If you have empty values add 'et' for empty
 * @param {String} workouts.workoutName - Name of workout
 * @param {Number} workouts.userId -  A User ID to be associated with this exercise.
 * @param {Date} workouts.date - Date as in SQL -> Format 'YYYY-MM-DD';
 * @param {String} workouts.exercises - Cannot be empty - This would be a Stringified Object. Formatted as {'exercise0': 'Squat', 'exercise1' : 'bench press'} -> 
 */

const setWorkout = async (workout) => {
  // Destructure object
  const {
    workoutName,
    userId,
    workoutDate,
    workoutExercises,
  } = exercise;

  try {
    const [results] = await connection.query(insertWorkout, [
      workoutName,
      userId,
      workoutDate,
      workoutExercises,
    ]);
    console.log(results);
    // return results;
  } catch (err) {
    throw new Error(err);
  }
};

/**
 *
 * @param {Number} workoutId - Deletes a workout by workout ID.
 */
const deleteWorkoutById = async (workoutId) => {
  try {
    const [result] = await connection.query(deleteWorkoutQuery, workoutId);
    console.log(result);
  } catch (err) {
    throw new Error(err);
  }
};

// For testing & Reference.
// const exercise = {
//   workoutName: 'WorkoutName',
//   userId: 1,
//   workoutDate: '2020-11-04',
//   workoutExercises: '{exercise0 : 'squat', exercise1 : 'bench press'}',
// };

module.exports = {
  getAllWorkoutsByUserId,
  getWorkoutsIdQuery,
  getWorkoutByWorkoutName,
  setWorkout,
  deleteWorkoutById,
};