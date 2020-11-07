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
    const [firstRow] = await connection.query(find)
   }
 }