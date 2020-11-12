const router = require('express').Router();
const {
  returnUsersHeightByUserId,
  returnUsersWeightByUserId,
  returnUsersWeightDateByUserId,
  addUserBiometrics,
} = require('../../controllers/biometricController');
// GET Routes
// GET -> /:userId          -> Returns All by User ID
// GET -> /:userId              -> Returns height by User Id
// GET -> /:userId       -> Returns weight by User Id
// GET -> /:userId      -> Returns date weight was measured by User Id

// Get height by User ID
router.get('/:userId', returnUsersHeightByUserId);

// Get weight by User ID
router.get('/:userId', returnUsersWeightByUserId);

// Get date for weights by User ID
router.get('/:userId', returnUsersWeightDateByUserId);

// Add an biometric data
router.post('/add', addUserBiometrics);

module.exports = router;
