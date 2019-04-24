const express = require('express');
const passport = require('passport');
const router = express.Router();
const { signIn } = require('../controllers/auth');

const signInAuth = passport.authenticate('local', { session: false });

router.post('/sign-in', signInAuth, signIn);


module.exports = router;