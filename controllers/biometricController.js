const {
  getUserHeightByUserID,
  getUserWeightByUserID,
  getUserWeightDateByUserID,
  setUserBiometrics,
} = require('../model/biometricOrm');

/**
 * 
* @param {number} req - req.params.userId
 * @param {object} res - returns an object
 */
const returnUsersHeightByUserId = async (req, res) => {
  try {
    const reObject = await getUserHeightByUserID(req.params.userId);
    res.json(reObject);
  } catch (err) {
    res.json({ success: false, msg: err});
  }
};

/**
 * 
* @param {number} req - req.params.userId
 * @param {object} res - returns an object
 */
const returnUsersWeightByUserId = async (req, res) => {
  try {
    const reObject = await getUserWeightByUserID(req.params.userId);
    res.json(reObject);
  } catch (err) {
    res.json({ success: false, msg: err});
  }
};

/**
 * 
* @param {number} req - req.params.userId
 * @param {object} res - returns an object
 */
const returnUsersWeightDateByUserId = async (req, res) => {
  try {
    const reObject = await getUserWeightDateByUserID(req.params.userId);
    res.json(reObject);
  } catch (err) {
    res.json({ success: false, msg: err});
  }
};

const addUserBiometrics = async (req, res) => {
  //   console.log(`obj`);
  //   console.log(req.body);

  const reObject = req.body;
  let empty = false;

  // Array of keys to rest if these exists
  const keys = [
    'userId',
    'height',
    'weight',
    'weightDate',
  ];

  // Check the validity of Object -> Not empty and Length is 10
  if (
    Object.keys(reObject).length !== 0 ||
    Object.keys(reObject).length === 11
  ) {
    keys.forEach((el) => {
      if (typeof reObject[el] === 'undefined') {
        empty = true;
      }
    });
  } else {
    empty = true;
  }

  // Add biometrics to DB if Object is fine.
  if (!empty) {
    await setUserBiometrics(req.body);
    res.json({ success: true });
  } else {
    res.json({
      success: false,
      msg: 'Object Invalid, missing data or does not exist.',
    });
  }
};

module.exports = {
  returnUsersHeightByUserId ,
  returnUsersWeightByUserId,
  returnUsersWeightDateByUserId,
  addUserBiometrics,
};

  