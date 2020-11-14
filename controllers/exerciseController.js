const {
  getAllExercisesByUserID,
  getAllExerciseByWorkoutId,
  getAnExerciseById,
  getAllExercisesByName,
  setExercise,
  removeExerciseById,
} = require('../model/exerciseOrm');

const checkExercises = async (req, res) => {
  console.log(`CHECK EXERCISES`);
  try {
    const reObject = await getAllExercisesByUserID(req.params.userId);
    if (reObject.length === 0) {
      res.json({ isEmpty: true });
    } else {
      res.json({ isEmpty: false });
    }
  } catch (err) {
    res.json({ success: false, msg: err });
  }
};

/**
 * Returns all exercises from a user by userId.
 * @param {number} req - req.params.userId
 * @param {object} res - returns an object
 */
const returnAllExerciseByUserId = async (req, res) => {
  console.log(`RETURN ALL BY USERID EXERCISES`);
  try {
    const reObject = await getAllExercisesByUserID(req.params.userId);
    res.json(reObject);
  } catch (err) {
    res.json({ success: false, msg: err });
  }
};

/**
 * Returns all exercises from a workout by workoutId
 * @param {number} req - req.params.exerciseId
 * @param {object} res - returns an object
 */
const returnAllExerciseByWorkoutId = async (req, res) => {
  console.log(`RETURN ALL BY WORKOUTID EXERCISES`);

  try {
    const reObject = await getAllExerciseByWorkoutId(req.params.workoutId);
    res.json(reObject);
  } catch (err) {
    res.json({ success: false, msg: err });
  }
};

/**
 * Returns an exercise by id
 * @param {number} req - req.params.exerciseId
 * @param {object} res - returns an object
 */
const returnAnExerciseById = async (req, res) => {
  console.log(`RETURN ALL BY ID EXERCISES`);

  try {
    const reObject = await getAnExerciseById(req.params.exerciseId);
    res.json(reObject);
  } catch (err) {
    res.json({ success: false, msg: err });
  }
};

/**
 * Returns All exercises by exerciseName
 * @param {string} req - req.params.exerciseName
 * @param {object} res - Returns an Object
 */
const returnAllExercisesByName = async (req, res) => {
  console.log(`RETURN ALL BY NAME EXERCISES`);

  try {
    const reObject = await getAllExercisesByName(req.params.exerciseName);
    res.json(reObject);
  } catch (err) {
    res.json({ success: false, msg: err });
  }
};

/**
 * POST -> Takes in an object with the following
 * Takes in an exercise Object which must contain all of the following. If you have empty values add 'et' for empty
 * @param {Object} req - Takes in an exercise Object. See the following for structure and details.
 * @param {String} req.body.exerciseName - Name of exercise
 * @param {String} req.body.muscleUsed - Can be empty - Muscle used with this exercise
 * @param {Number} req.body.userId -  A User ID to be associated with this exercise.
 * @param {Number} req.body.workoutId - A Workout ID to be associated with this exercise.
 * @param {Date}   req.body.exerciseDate - Date as in SQL -> Format 'YYYY-MM-DD';
 * @param {Number} req.body.setTotal  - Total amount of sets
 * @param {String} req.body.reptitionGoalPerSet - This would be a Stringified Object. Formatted as {'set0': 15, 'set1' : 30}
 * @param {String} req.body.reptitionsCompletedPerSet - This would be a Stringified Object. Formatted as {'set0': 8, 'set1' : 12}
 * @param {String} req.body.weightUsedPerSet - Can be empty - This would be a Stringified Object. Formatted as {'set0': 15, 'set1' : 30} -> Weight always in LBs (Pounds).
 * @param {String} req.body.timeUsedPerSet - Can be empty -This would be a Stringified Object. Formatted as {'set0': 300} -> Time always in seconds
 * @param {String} req.body.restTimeUsedPerSet - Can be empty - This would be a Stringified Object. Formatted as {'set0': 300} -> Time always in seconds
 * @param {object} res - res.json({ success : true/false}).
 */
const addExercise = async (req, res) => {
  console.log(`ADD AN EXERCISE`);

  const reObject = req.body;
  let empty = false;

  // Array of Keys to test if these exist
  const keys = [
    'exerciseName',
    'muscleUsed',
    'userId',
    'workoutId',
    'exerciseDate',
    'setTotal',
    'reptitionGoalPerSet',
    'reptitionsCompletedPerSet',
    'weightUsedPerSet',
    'timeUsedPerSet',
    'restUsedPerSet',
  ];

  // Check the validity of Object -> Not empty and Length is 11
  if (Object.keys(reObject).length === 11) {
    keys.forEach((el) => {
      if (typeof reObject[el] === 'undefined') {
        empty = true;
      }
    });
  } else {
    empty = true;
  }

  // Add exercise to DB if Object is fine.
  if (!empty) {
    await setExercise(req.body);
    res.json({ success: true });
  } else {
    res.json({
      success: false,
      msg: 'Object Invalid, missing data or does not exist.',
    });
  }
};

/**
 * Deletes an exercise by exerciseId
 * @param {number} req - req.params.exerciseId
 * @param {object} res - res.success = true/false
 */
const deleteExercise = async (req, res) => {
  try {
    await removeExerciseById(req.params.exerciseId);
    res.json({ success: true });
  } catch (err) {
    res.json({ success: false, msg: err });
  }
};

module.exports = {
  returnAllExerciseByUserId,
  returnAllExerciseByWorkoutId,
  returnAnExerciseById,
  returnAllExercisesByName,
  addExercise,
  deleteExercise,
  checkExercises,
};
