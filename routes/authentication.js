const express = require('express');
const router = express.Router();

const authenticationCtrl = require('../controllers/authentication');

router.get('/status', authenticationCtrl.status);
router.post('/signup', authenticationCtrl.signup);
router.post('/login', authenticationCtrl.login);

module.exports = router;