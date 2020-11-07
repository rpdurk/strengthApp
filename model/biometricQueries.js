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
const findUserWeightByUserId = 'SELECT id, weight FROM userbiometrics WHERE id = ?;';
const findDateWeightAddedByUserId = 'SELECT id, weightDate FROM userbiometrics WHERE id = ?;';
const insertUserBiometrics = 'INSERT INTO userbiometrics (userId, height, weight, weightDate) VALUES (?, ?, ?);';

// INSERT INTO userbiometrics (userId, height, weight, weightDate) 
// VALUES (
// 1,
// 62,
// 150,
// '2020-11-04',
// );

module.exports = {
    findUsersHeight,
    findUsersWeight,
    findDateWeightEntered,
    findUserHeightByUserId,
    findUserWeightByUserId,
    findDateWeightAddedByUserId,
    insertUserBiometrics,
};