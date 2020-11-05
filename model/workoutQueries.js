/**
 *  Workout Queries
 *
 *  ID INT Auto_INCREMENT NOT NULL,
 *  Foreign Key UserId of the User who made it
 *  WorkoutName
 *  Date INT NOT NULL,
 *  Exercise choices VARCHAR(3000) NOT NULL, <- Will contain JSON String
 *  Primary Key (id)
 *
 */
const findAllWorkouts = 'SELECT id, workoutName FROM workouts;';
const findWorkoutByIdQuery = 'SELECT id, workooutName FROM workouts WHERE id = ?;';
const findWorkoutByWorkoutName =
    'SELECT id FROM workouts WHERE workoutName = ?;';
const insertWorkout = 'INSERT INTO workout (workoutName, userId, workoutDate, exercsises) VALUES (?, ?, ?, ?);';
const deleteWorkoutQuery = 'DELETE FROM workout WHERE ID = ?;';

module.exports = {
    findAllWorkouts,
    findWorkoutByIdQuery,
    findWorkoutByWorkoutName,
    insertWorkout,
    deleteWorkoutQuery,
};