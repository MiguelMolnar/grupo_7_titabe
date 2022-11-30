const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

var storage = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null, path.join(__dirname,'/../../public/images/users'));
    },
    filename : (req, file, cb) => {
        cb(null, 'img-' + Date.now() + path.extname(file.originalname));
    }
})
var upload = multer ({storage:storage});

const {body} = require('express-validator');
const usersController = require('../controllers/usersController');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

//Validaciones
const validationsRegister = [
    body('firstName').notEmpty().withMessage('Este campo no debe estar vacío.').bail().isLength({min: 2}).withMessage('Debe tener al menos 2 caracteres.'),
    body('lastName').notEmpty().withMessage('Este campo no debe estar vacío.').bail().isLength({min: 2}).withMessage('Debe tener al menos 2 caracteres.'),
    body('category').notEmpty().withMessage('Este campo no debe estar vacío.'),
    body('email').notEmpty().withMessage('Este campo no debe estar vacío.').bail().isEmail().withMessage('Debes completar un mail válido.'),
    body('password').notEmpty().withMessage('Este campo no debe estar vacío.'),   
]

const validationsLogin = [
    body('email').notEmpty().withMessage('Este campo no debe estar vacío.').bail().isEmail().withMessage('Debes completar un mail válido.'),
    body('password').notEmpty().withMessage('Este campo no debe estar vacío.'),   
]


storeUser: (req, res) => {
    let errores = validationResult(req)
}

//Registro de nuevo usuario
router.get('/register', guestMiddleware, usersController.register);
router.post('/', upload.single('image'), validationsRegister, usersController.store);

//Formulario de login
router.get('/login', guestMiddleware, usersController.login);  
router.post('/login', upload.single('image'), validationsLogin,usersController.loginProcess);

//Proceso de Logout
router.get('/logout', usersController.logout);

module.exports = router;