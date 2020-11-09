const {
  findUserHeightByUserId,
  findUserWeightByUserId,
  findDateWeightAddedByUserId,
  insertUserBiometrics,
} = require('./biometricQueries');

const connection = require('../config/connection');

/**
 * 
 * @param {Number} userId - Gets height of user by UserId from SQL DB 
 */
const getUserHeightByUserID = async (userId) => {
  try {
    const [firstRow] = await connection.query(findUserHeightByUserId, userId);
    return firstRow;
  } catch (err) {
    if (err) console.error(err);
    throw new Error(err);
  }
};

/**
 * 
 * @param {Number} userId -Gets weight of user by UserId 
 */
const getUserWeightByUserID = async (userId) => {
  try {
    const [firstRow] = await connection.query(findUserWeightByUserId, userId);
    return firstRow;
  } catch (err) {
    if (err) console.error(err);
    throw new Error(err);
  }
};

/**
 * 
 * @param {Number} userId - obtains user 
 */
const getUserWeightDateByUserID = async (userId) => {
  try {
    const [firstRow] = await connection.query(findDateWeightAddedByUserId, userId);
    return firstRow;
  } catch (err) {
    if (err) console.error(err);
    throw new Error(err);
  }
};

/**
 * 
 * @param {Number} biometrics.userID A User ID to be associated with this Date
 * @param {Number} biometrics.height - A height to be associated with the user.
 * @param {Number} biometrics.weight - A weight to be associated with the user.
 *  @param {Date} biometric.date - Date as in SQL -> Format 'YYYY-MM-DD';
 */
const setUserBiometrics = async (biometrics) => {
  // Destructure object
  const {
    userId,
    height,
    weight,
    weightDate,
  } = biometrics;

  try {
    const [results] = await connection.query(insertUserBiometrics, [
      userId,
      height,
      weight,
      weightDate,
    ]);
    console.log(results);
    // return results;
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  getUserHeightByUserID,
  getUserWeightByUserID,
  getUserWeightDateByUserID,
  setUserBiometrics,
};

// For testing & Reference.
// const biometrics = {
//   userId: 1,
//   height: 60,
//   weight: 150,
//   weightDate: '2020-11-04',
// 
// };