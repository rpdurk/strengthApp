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
// GET -> /:workoutId     -> Returns all workouts by workout ID
// GET -> /:workoutName    -> Returns all workout by a specific name
// Post -> /addWorkout     -> Add workout object into the database
// DELETE -> /deleteWorkout    -> Deletes workout object from the database


// Get workouts by User ID
router.get('/user/:userId', returnAllWorkoutsByUserId);

// Get workout by workout ID
router.get('/id/:workoutId', returnWorkoutsById);

// Get workout by workoutName
router.get('/name/:workoutName', returnWorkoutsByWorkoutName);

// Add a workout
router.post('/addWorkout', addWorkout);

// Delete a workout
router.delete('/:workoutId', deleteWorkouts);

module.exports = router;
