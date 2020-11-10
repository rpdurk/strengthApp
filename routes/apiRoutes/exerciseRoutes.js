const router = require('express').Router();
const {
  returnAllExerciseByUserId,
  returnAllExerciseByWorkoutId,
  returnAnExerciseById,
  returnAllExercisesByName,
  addExercise,
  deleteExercise,
} = require('../../controllers/exerciseController');
// GET Routes
// GET -> /:userId          -> Returns All by User
// GET -> /:exerciseId              -> Returns Individual
// GET -> /:workoutId       -> Returns All by Workout
// GET -> /:exerciseName    -> Returns All by Name

// Get exercises by User ID
router.get('/:userId', returnAllExerciseByUserId);

// Get exercises by Exercise ID
router.get('/:exerciseId', returnAnExerciseById);

// Get exercises by Workout ID
router.get('/:workoutId', returnAllExerciseByWorkoutId);

// Get exercises by Exercise Name
router.get('/:exerciseName', returnAllExercisesByName);

// Add an Exercise
router.post('/add', addExercise);

// Delete an Exercise
router.delete('/:exerciseId', deleteExercise);

module.exports = router;
