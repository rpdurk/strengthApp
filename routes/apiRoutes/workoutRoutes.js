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
router.get('/user/:userId', returnAllWorkoutsByUserId);

// Get workout by workout ID
router.get('/id/:workoutId', returnWorkoutsById);

// Get workout by workoutName
router.get('/name/:workoutName', returnWorkoutsByWorkoutName);

// Add a workout
router.post('/addWorkout', addWorkout);

// Delete a workout
router.post('/delete/:workoutId', deleteWorkouts);

module.exports = router;
