/* Exercises
 *
 * CREATE TABLE exercises (
 * 	id INT AUTO_INCREMENT NOT NULL,
 *     exerciseName VARCHAR(255) NOT NULL,
 *     musclesUsed VARCHAR(255),
 *     userId INT references users(id),
 *     workoutName references workouts(id),
 *     exerciseDate DATE NOT NULL,
 *     setTotal INT NOT NULL,
 *     reptitionsGoalPerSet VARCHAR(255) NOT NULL,
 *     reptitionsCompletedPerSet VARCHAR(255) NOT NULL,
 *     weightUsedPerSet VARCHAR(255) NOT NULL,
 *     timeUsedPerSet VARCHAR(255) NOT NULL,
 *     restUsedPerSet VARCHAR(255) NOT NULL,
 *     PRIMARY KEY (id)
 * );
 *
 *
 */

const findExerciseByUser = 'SELECT ';
