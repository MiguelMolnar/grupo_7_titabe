const express = require('express');
const router = express.Router();

//Controller
const usersController = require('../controllers/usersController');

//Middlewares
const usersMulterMiddleware = require('../middlewares/usersMulterMiddleware')
const validationsRegisterMiddleware = require('../middlewares/validationsRegisterMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');

//Registro de nuevo usuario
router.get('/register', guestMiddleware, usersController.register);
router.post('/register', usersMulterMiddleware.single('image'), validationsRegisterMiddleware, usersController.store);

//Formulario de login
router.get('/login', guestMiddleware, usersController.login);  
router.post('/login', usersController.loginProcess);

//Proceso de Logout
router.get('/logout', usersController.logout);

module.exports = router;