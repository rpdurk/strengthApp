/*
find height
find weight
find weight
find above by id
insert into these
*/

// );
const findUsersHeight = 'SELECT id, height FROM userbiometrics;';
const findUsersWeight = 'SELECT id, weight FROM userbiometrics;';
const findDateWeightEntered = 'SELECT id, weightDate FROM userbiometrics;';
const findUserHeightByUserId = 'SELECT id, height FROM userbiometrics WHERE id = ?;';
const findUserWeightByUserId = 'SELECT id, workooutName FROM userbiometrics WHERE id = ?;';
const findDateWeightAddedByUserId = 'SELECT id, workooutName FROM userbiometrics WHERE id = ?;';
const insertUserBiometrics = 'INSERT INTO userbiometrics (height, weight, weightDate) VALUES (?, ?, ?);';

module.exports = {
    findUsersHeight,
    findUsersWeight,
    findDateWeightEntered,
    findUserHeightByUserId,
    findUserWeightByUserId,
    findDateWeightAddedByUserId,
    insertUserBiometrics,
};