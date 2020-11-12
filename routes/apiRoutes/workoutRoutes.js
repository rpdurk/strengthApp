const router = require('express').Router();
const { 
  returnAllWorkoutsByUserId,
  returnWorkoutsById,
  returnWorkoutsByWorkoutName,
  addWorkout,
  deleteWorkouts,
} = require('../../controllers/workoutController');

// GET Routes
// GET -> /:userId          -> Returns All workouts by User
// GET -> /:height              -> Returns height by UserId
// GET -> /:weightId     -> Returns weight by UserId
// GET -> /:weightDate    -> Returns Dates of weight by UserId

// Get workouts by User ID
router.get('/:userId', returnAllWorkoutsByUserId);

// Get workout by workout ID
router.get('/:workoutId', returnWorkoutsById);

// Get workout by workoutName
router.get('/:workoutName', returnWorkoutsByWorkoutName);

// Add a workout
router.get('/addWorkout', addWorkout);

// Delete a workout
router.get('/:workoutId', deleteWorkouts);

module.exports = router;