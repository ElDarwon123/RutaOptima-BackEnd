const express = require('express');
const authController = require('../controllers/authContoller');
const router = express.Router();

router.post('/registro', authController.registro);
router.post('/login', authController.login);

module.exports = router;