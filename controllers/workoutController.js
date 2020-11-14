const {
  getAllWorkoutsByUserId,
  getWorkoutsIdQuery,
  getWorkoutByWorkoutName,
  setWorkout,
  deleteWorkoutById,
} = require('../model/workoutOrm');

/**
 *
 * @param {Number} req - req.params.userId
 * @param {Object} res - returns an object
 */
const returnAllWorkoutsByUserId = async (req, res) => {
  try {
    const reObject = await getAllWorkoutsByUserId(req.params.userId);
    res.json(reObject);
  } catch (err) {
    res.json({ success: false, msg: err });
  }
};

/**
 *
 * @param {Number} req - req.params.workoutId
 * @param {Object} res - returns an object
 */
const returnWorkoutsById = async (req, res) => {
  try {
    const reObject = await getWorkoutsIdQuery(req.params.workoutId);
    res.json(reObject);
  } catch (err) {
    res.json({ success: false, msg: err });
  }
};

/**
 *
 * @param {String} req - req.params.workoutName
 * @param {Object} res - returns an object
 */
const returnWorkoutsByWorkoutName = async (req, res) => {
  try {
    const reObject = await getWorkoutByWorkoutName(req.params.workoutName);
    res.json(reObject);
  } catch (err) {
    res.json({ success: false, msg: err });
  }
};

/**
 * Takes in an exercise Object which must contain all of the following. If you have empty values add 'et' for empty
 * @param {String} workouts.workoutName - Name of workout
 * @param {Number} workouts.userId -  A User ID to be associated with this exercise.
 * @param {Date} workouts.date - Date as in SQL -> Format 'YYYY-MM-DD';
 * @param {String} workouts.exercises - Cannot be empty - This would be a Stringified Object. Formatted as {'exercise0': 'Squat', 'exercise1' : 'bench press'} ->
 */
const addWorkout = async (req, res) => {
  let empty = false;
  const reObject = req.body;
  console.log(reObject);

  // Array of Keys to test if these exist
  const keys = ['workoutName', 'userId', 'exercises'];

  // Check the validity of Object -> Not empty and Length is 10
  if (Object.keys(reObject).length !== 0) {
    keys.forEach((el) => {
      if (typeof reObject[el] === 'undefined') {
        empty = true;
      }
    });

    // Add workout to DB if Object is fine.
    if (!empty) {
      await setWorkout(reObject);
      res.json({ success: true });
    } else {
      res.json({
        success: false,
        msg: 'Object Invalid, missing data or does not exist.',
      });
    }
  }
};

const deleteWorkouts = async (req, res) => {
  try {
    await deleteWorkoutById(req.params.workoutId);
    res.json({ success: true });
  } catch (err) {
    res.json({ success: false, msg: err });
  }
};

module.exports = {
  returnAllWorkoutsByUserId,
  returnWorkoutsById,
  returnWorkoutsByWorkoutName,
  addWorkout,
  deleteWorkouts,
};
