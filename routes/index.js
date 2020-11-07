const router = require('express').Router();
const exerciseRoutes = require('./apiRoutes/exerciseRoutes');
const authRoutes = require('./authRoutes');

// /api/users

// -> /api/exercise
router.use('/api/exercise', exerciseRoutes);

// -> /api/workout
// router.use('/api/workout', workoutRoutes);
router.use('/auth', authRoutes);

module.exports = router;
