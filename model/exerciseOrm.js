const {
  findAllExercisesByUserId,
  findExerciseByWorkoutId,
  findExerciseById,
  findExerciseByName,
  inserExerciseQuery,
  deleteExerciseById,
  findAllExercisesByMuscle,
} = require('./exerciseQueries');

const connection = require('../config/connection'); // DB Connection
/**
 * Gets Excercises by user ID from SQL DB.
 * @param {Number} userId - User ID of who's exercises to return
 */
const getAllExercisesByUserID = async (userId) => {
  try {
    const [results] = await connection.query(findAllExercisesByUserId, userId);
    return results;
  } catch (err) {
    if (err) console.error(err);
    throw new Error(err);
  }
};

/**
 * Gets Exercuses by workout ID from SQL DB
 * @param {Number} workoutId - Workout ID of which exercise to return
 */
const getAllExerciseByWorkoutId = async (workoutId) => {
  try {
    const [results] = await connection.query(
      findExerciseByWorkoutId,
      workoutId
    );
    return results;
  } catch (err) {
    throw new Error(err);
  }
};
/**
 * Finds an Excercise by ID
 * @param {Number} exerciseId - Exercise ID to be found
 */
const getAnExerciseById = async (exerciseId) => {
  try {
    const [results] = await connection.query(findExerciseById, exerciseId);
    return results;
  } catch (err) {
    throw new Error(err);
  }
};
/**
 * Finds an Excercise by Name
 * @param {String} exerciseName - Exercise of name.
 */
const getAllExercisesByName = async (exerciseName) => {
  try {
    const [results] = await connection.query(findExerciseByName, exerciseName);
    return results;
  } catch (err) {
    throw new Error(err);
  }
};

const getAllExercisesByMuscle = async (muscleUsed) => {
  try {
    const [results] = await connection.query(
      findAllExercisesByMuscle,
      muscleUsed
    );
    return results;
  } catch (err) {
    throw new Error(err);
  }
};

/**
 * Takes in an exercise Object which must contain all of the following. If you have empty values add 'et' for empty
 * @param {Object} exercise - Takes in an exercise Object. See the following for structure and details.
 * @param {String} exercise.name - Name of exercise
 * @param {String} exercise.muscleUsed - Can be empty - Muscle used with this exercise
 * @param {Number} exercise.userId -  A User ID to be associated with this exercise.
 * @param {Number} exercise.workoutId - A Workout ID to be associated with this exercise.
 * @param {Date}   exercise.date - Date as in SQL -> Format 'YYYY-MM-DD';
 * @param {Number} exercise.setTotal  - Total amount of sets
 * @param {String} exercise.repsGoalPerSet - This would be a Stringified Object. Formatted as {'set0': 15, 'set1' : 30}
 * @param {String} exercise.repsCompletedPerSet - This would be a Stringified Object. Formatted as {'set0': 8, 'set1' : 12}
 * @param {String} exercise.weightUsedPerSet - Can be empty - This would be a Stringified Object. Formatted as {'set0': 15, 'set1' : 30} -> Weight always in LBs (Pounds).
 * @param {String} exercise.timeUsedPerSet - Can be empty -This would be a Stringified Object. Formatted as {'set0': 300} -> Time always in seconds
 * @param {String} exercise.restTimeUsedPerSet - Can be empty - This would be a Stringified Object. Formatted as {'set0': 300} -> Time always in seconds
 */
const setExercise = async (exercise) => {
  // Destructure object
  const {
    name,
    muscleUsed,
    userId,
    workoutId,
    date,
    setTotal,
    repsGoalPerSet,
    repsCompletedPerSet,
    weightUsedPerSet,
    timeUsedPerSet,
    restTimeUsedPerSet,
  } = exercise;

  try {
    const [results] = await connection.query(inserExerciseQuery, [
      name,
      muscleUsed,
      userId,
      workoutId,
      date,
      setTotal,
      repsGoalPerSet,
      repsCompletedPerSet,
      weightUsedPerSet,
      timeUsedPerSet,
      restTimeUsedPerSet,
    ]);
  } catch (err) {
    throw new Error(err);
  }
};

/**
 *
 * @param {Number} exerciseId - Deletes an exercise by exercise ID.
 */
const removeExerciseById = async (exerciseId) => {
  try {
    const [result] = await connection.query(deleteExerciseById, exerciseId);
    console.log(result);
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  getAllExercisesByUserID,
  getAllExerciseByWorkoutId,
  getAnExerciseById,
  getAllExercisesByName,
  getAllExercisesByMuscle,
  setExercise,
  removeExerciseById,
};

// For testing & Reference.
// const exercise = {
//   name: 'ExerciseName 3',
//   muscleUsed: 'Muscle Used 3',
//   userId: 1,
//   workoutId: 1,
//   date: '2020-11-04',
//   setTotal: 4,
//   repsGoalPerSet: 6,
//   repsCompletedPerSet: 4,
//   weightUsedPerSet: '{set1 : 15, set2 : 20}',
//   timeUsedPerSet: '{set1 : 60, set2 : 80}',
//   restTimeUsedPerSet: '{set1 : 60, set2 : 600}',
// };
