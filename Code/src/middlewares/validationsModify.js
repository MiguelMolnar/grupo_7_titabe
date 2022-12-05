const {body} = require('express-validator');
const path = require('path');

const validationsProductsModify = [
    body('productName').notEmpty().withMessage('Este campo no debe estar vacío.').isLength({min: 5}).withMessage('Debe tener al menos 5 caracteres.'),
    body('productDescriptionShort').notEmpty().withMessage('Este campo no debe estar vacío.').isLength({min: 5}).withMessage('Debe tener al menos 5 caracteres.'),
    body('productDescriptionLong').notEmpty().withMessage('Este campo no debe estar vacío.').isLength({min: 20}).withMessage('Debe tener al menos 20 caracteres.'),
    body('productPrice').notEmpty().withMessage('Este campo no debe estar vacío.').isNumeric().withMessage('Debe haber un precio.'),
    body('productDiscount').notEmpty().withMessage('Este campo no debe estar vacío.').isNumeric().withMessage('Debe haber un descuento válido.'),
    body('productCategory').notEmpty().withMessage('Este campo no debe estar vacío.'),   
    body('productImageMain').custom((value, { req }) => {
        let acceptedExtensions = [".png", ".jpeg", ".gif", ".jpg"];
        if (req.files) {
            let file = req.files.productImageMain[0];
            let fileExtension = path.extname(file.originalname.toLowerCase());
            if (!acceptedExtensions.includes(fileExtension)) {
                throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(", ")}`);
            }
        } else {
            return true
        }
    }),
]

module.exports = validationsProductsModify;