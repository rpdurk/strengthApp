const router = require('express').Router();
const {
  returnAllExerciseByUserId,
  returnAllExerciseByWorkoutId,
  returnAnExerciseById,
  returnAllExercisesByName,
  addExercise,
  deleteExercise,
  checkExercises,
} = require('../../controllers/exerciseController');
// /api/exercise ->
// GET Routes
// GET -> /:userId          -> Returns All by User
// GET -> /:exerciseId      -> Returns Individual exercise
// GET -> /:workoutId       -> Returns All by Workout
// GET -> /:exerciseName    -> Returns All by Name
// Checks if exercises exist for user.
router.get('/check/:userId', checkExercises);

// Get exercises by User ID
router.get('/user/:userId', returnAllExerciseByUserId);

// Get exercises by Exercise ID
router.get('/exercise/:exerciseId', returnAnExerciseById);

// Get exercises by Workout ID
router.get('/workout/:workoutId', returnAllExerciseByWorkoutId);

// Get exercises by Exercise Name
router.get('/exerciseName/:exerciseName', returnAllExercisesByName);

// Add an Exercise
router.post('/add', addExercise);

// Delete an Exercise
router.delete('/:exerciseId', deleteExercise);

module.exports = router;
