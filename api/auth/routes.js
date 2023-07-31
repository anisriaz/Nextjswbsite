const express = require('express');
const router = express.Router();
const authController = require('../auth/auth.controller');

// Signup route
router.post('/signup', authController.signup);

// Login route
router.post('/login', authController.login);

module.exports = router;
