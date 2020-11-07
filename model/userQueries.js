/**
 * These queries should be valid for our Strength-App.
 *
 */

const findUserByIdQuery = 'SELECT id, username FROM users WHERE id = ?;';
const findUserByUsername =
  'SELECT id, username, password FROM users WHERE username = ?;';
const insertUserQuery = 'INSERT INTO users (username, password) VALUES (?, ?);';
const deleteUserByIdQuery = 'DELETE FROM users WHERE ID = ?;';

module.exports = {
  findUserByIdQuery,
  findUserByUsername,
  insertUserQuery,
  deleteUserByIdQuery,
};
