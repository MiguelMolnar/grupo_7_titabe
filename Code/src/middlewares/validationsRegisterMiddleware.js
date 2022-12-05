const {body} = require('express-validator');

//Validaciones
const validationsRegister = [
    body('fullName').notEmpty().withMessage('Este campo no debe estar vacío.').bail().isLength({min: 2}).withMessage('Debe tener al menos 2 caracteres.'),
    body('phoneNumber').notEmpty().withMessage('Este campo no debe estar vacío.').isNumeric().withMessage('Debe haber un teléfono válido.'),
    body('address').notEmpty().withMessage('Este campo no debe estar vacío.').bail().isLength({min: 2}).withMessage('Debe tener al menos 2 caracteres.'),
    body('email').notEmpty().withMessage('Este campo no debe estar vacío.').bail().isEmail().withMessage('Debes completar un mail válido.'),
    body('password').notEmpty().withMessage('Este campo no debe estar vacío.').bail().matches(/(?=.*[a-z])((?=.*[A-Z])|(?=.*\d)).{8,}/).withMessage('No cumple los requisitos'),
    body('passwordCheck').notEmpty().withMessage('Este campo no debe estar vacío.'), 
]

module.exports = validationsRegister;
