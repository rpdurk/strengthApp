const {
  findAllExercisesByUserId,
  findExerciseById,
  findExerciseByName,
  inserExerciseQuery,
  deleteExerciseById,
  findExerciseByWorkoutId,
} = require('./exerciseQueries');

const connection = require('../config/connection');

/**
 *
 * @param {Number} userId - Gets Excercises by user ID.
 */
const getAllExercisesByUserID = async (userId) => {
  try {
    const result = await connection.query(findAllExercisesByUserId, userId);
    console.log(result);
  } catch (err) {
    if (err) console.error(err);
    throw new Error(err);
  }
};

getAllExercisesByUserID(1);
