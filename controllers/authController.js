const jwt = require('jsonwebtoken');
const {
  insertUserToDb,
  fetchUserByUsernameFromDb,
} = require('../model/userOrm');

const tokenForUser = (id) => {
  return jwt.sign(
    {
      sub: id,
      iat: new Date().getTime(),
    },
    process.env.JWT_SECRET
  );
};

module.exports = {
  signInApi: (req, res) => {
    const user = fetchUserByUsernameFromDb(req.body.username);

    res.json(tokenForUser(req.user.id));
  },

  getUserDetails: async (req, res) => {
    console.log(`Params :username ${req.params.username}`);
    const { id, username } = await fetchUserByUsernameFromDb(
      req.params.username
    );
    res.json({ id, username });
  },

  signUpApi: async (req, res) => {
    const { username, password } = req.body;
    try {
      const user = await insertUserToDb(username, password);
      res.json(tokenForUser(user.id));
    } catch (e) {
      res.status(400).json(e);
    }
  },
};
