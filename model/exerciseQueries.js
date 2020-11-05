/* Exercises
 *
CREATE TABLE exercises (
	id INT AUTO_INCREMENT NOT NULL,
    exerciseName VARCHAR(255) NOT NULL,
    musclesUsed VARCHAR(255),
    userId INT references users(id),
    workoutName INT references workouts(id),
    exerciseDate DATE NOT NULL,
    setTotal INT NOT NULL,
    reptitionsGoalPerSet VARCHAR(255) NOT NULL,
    reptitionsCompletedPerSet VARCHAR(255) NOT NULL,
    weightUsedPerSet VARCHAR(255) NOT NULL,
    timeUsedPerSet VARCHAR(255) NOT NULL,
    restUsedPerSet VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
 * find all exercises
 * find muscles used
 * find setTotal
 * find repetition goal
 * find repetitions and sets
 * find weights used and sets
 * find time used by set
 * find rests used per sets
 * find exercises by workout
 * find exercises by users
 * find
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
