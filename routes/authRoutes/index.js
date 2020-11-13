const router = require('express').Router();

const {
  signInApi,
  signUpApi,
  getUserId,
} = require('../../controllers/authController');

// /auth prepended to everything
const signInMiddleware = require('../../middlewares/signInMiddleware');

// Get user id with name
router.get('/userid/:username', getUserId);

// /auth/signin
router.post('/signin', signInMiddleware, signInApi);
router.post('/signup', signUpApi);

module.exports = router;
