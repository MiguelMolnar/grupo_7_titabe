const express = require('express');
const router = express.Router();

const indexController = require('../controllers/indexController');

router.get('/', indexController.home);
router.get('/search', indexController.search); 
router.get('/register', indexController.register);
router.get('/login', indexController.login);

module.exports = router;