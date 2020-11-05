/* Exercises
 *
 * CREATE TABLE exercises (
 * 	id INT AUTO_INCREMENT NOT NULL,
 *   0  exerciseName VARCHAR(255) NOT NULL,
 *   1  musclesUsed VARCHAR(255) NOT NULL,
 *   2  userId INT references users(id),
 *   3  workoutId references workouts(id),
 *   4  exerciseDate DATE NOT NULL,
 *   5  setTotal INT NOT NULL,
 *   6  reptitionsGoalPerSet VARCHAR(255) NOT NULL,      <- Object Strings
 *   7  reptitionsCompletedPerSet VARCHAR(255) NOT NULL, <- Object Strings
 *   8  weightUsedPerSet VARCHAR(255) NOT NULL,          <- Object Strings <- Set to 'empty' <- LBs
 *   9  timeUsedPerSet VARCHAR(255) NOT NULL,            <- Object Strings <- Set to 'empty' <- Seconds
 *   10 restUsedPerSet VARCHAR(255) NOT NULL, 'et'       <- Object Strings <- Set to 'empty' <- Seconds
 *       PRIMARY KEY (id)
 * );

 *
 *
 */

const findAllExercisesByUserId =
  'SELECT id, exerciseName FROM exercises WHERE userId = ?;';
const findExerciseByWorkoutId = 'SELECT * FROM exercises WHERE workoutId = ?;';
const findExerciseById = 'SELECT * FROM exercises WHERE id = ?;';
const findExerciseByName = 'SELECT * FROM exercises WHERE exerciseName = ?;';
const inserExerciseQuery =
  'INSERT INTO exercises (exerciseName, musclesUsed, userId, workoutId, exerciseDate, setTotal, reptitionsGoalPerSet, reptitionsCompletedPerSet, weightUsedPerSet, timeUsedPerSet, restUsedPerSet) VALUES (? ,? ,?, ? ,? ,?, ? ,? ,?, ?, ?)';
const deleteExerciseById = 'DELETE FROM exercises WHERE id = ?;';

module.exports = {
  findAllExercisesByUserId,
  findExerciseById,
  findExerciseByName,
  inserExerciseQuery,
  deleteExerciseById,
  findExerciseByWorkoutId,
};
