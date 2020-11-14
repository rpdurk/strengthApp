const router = require('express').Router();

const {
  signInApi,
  signUpApi,
  getUserDetails,
} = require('../../controllers/authController');

// /auth prepended to everything
const signInMiddleware = require('../../middlewares/signInMiddleware');

// /auth/userid/:username
router.get('/userid/:username', getUserDetails);

// /auth/signin
router.post('/signin', signInMiddleware, signInApi);
router.post('/signup', signUpApi);

module.exports = router;
