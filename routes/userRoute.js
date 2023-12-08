const express = require('express');
const router = express();

const userController = require('../controllers/userController');

router.get('/index', userController.loadIndex);
router.get('/check', userController.check);

module.exports = router;