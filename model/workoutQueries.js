/**
 *  Workout Queries
 *
 *  find the workouts
 *  find the workout by id
 *  find the workout by name
 *  insert a workout
 *  delete a workout
 *
 */
const findAllWorkouts = 'SELECT id, workoutName FROM workouts;';
const findWorkoutByIdQuery = 'SELECT id, workooutName FROM workouts WHERE id = ?;';
const findWorkoutByWorkoutName =
    'SELECT id FROM workouts WHERE workoutName = ?;';
const insertWorkout = 'INSERT INTO workouts (workoutName, userId, workoutDate, exercsises) VALUES (?, ?, ?, ?);';
const deleteWorkoutQuery = 'DELETE FROM workouts WHERE ID = ?;';

module.exports = {
    findAllWorkouts,
    findWorkoutByIdQuery,
    findWorkoutByWorkoutName,
    insertWorkout,
    deleteWorkoutQuery,
};