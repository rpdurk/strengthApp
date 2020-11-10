const router = require('express').Router();
const exerciseRoutes = require('./apiRoutes/exerciseRoutes');
const authRoutes = require('./authRoutes');
const signInMiddleware = require('../middlewares/signInMiddleware');
// const userSignUp = require();

// /api/users
router.use('/api/users/');

// -> /api/exercise
router.use('/api/exercise', signInMiddleware, exerciseRoutes);

// -> /api/workout
// router.use('/api/workout', workoutRoutes);
router.use('/auth', authRoutes);

module.exports = router;
