const express = require('express');
const router = express.Router();

const authentication = require('../middleware/authentication');
const userCtrl = require('../api/user');

router.delete('/',authentication, userCtrl.deleteUser);
router.put('/',authentication, userCtrl.updateUsername);

module.exports = router;