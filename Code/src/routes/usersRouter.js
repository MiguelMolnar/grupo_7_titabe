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

//Validaciones
//const validateLoginForm = [
//    body('user').notEmpty().withMessage('Este campo no debe estar vacío.').isEmail().withMessage('Debe ser compatible con un formato de email.'),
//    body('pass').notEmpty().withMessage('Este campo no debe estar vacío.')
//]

router.get('/register', usersController.register);
router.post('/', upload.single('image'), usersController.store);
router.get('/login', usersController.login);        //Ruta que da la vista al login
router.post('/login', usersController.loginProcess);    //Ruta que procesa el login



module.exports = router;