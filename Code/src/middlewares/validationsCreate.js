const {body} = require('express-validator');
const path = require('path');

const validationsProductsCreate = [
    body('productName').notEmpty().withMessage('Este campo no debe estar vacío.').isLength({min: 5}).withMessage('Debe tener al menos 5 caracteres.'),
    body('productDescriptionShort').notEmpty().withMessage('Este campo no debe estar vacío.').isLength({min: 5}).withMessage('Debe tener al menos 5 caracteres.'),
    body('productDescriptionLong').notEmpty().withMessage('Este campo no debe estar vacío.').isLength({min: 20}).withMessage('Debe tener al menos 20 caracteres.'),
    body('productPrice').notEmpty().withMessage('Este campo no debe estar vacío.').isNumeric().withMessage('Debe haber un precio válido.'),
    body('productDiscount').notEmpty().withMessage('Este campo no debe estar vacío.').isNumeric().withMessage('Debe haber un descuento válido.'),
    body('productCategory').notEmpty().withMessage('Este campo no debe estar vacío.'),
    body('productSubcategory').notEmpty().withMessage('Este campo no debe estar vacío.'), 
    body('productImageMain').custom((value, { req }) => {
        let file = req.files.productImageMain[0];
        let acceptedExtensions = [".png", ".jpeg", ".gif", ".jpg"];
        
        if (!file) {
            throw new Error("Tenes que subir una imagen");
        } else {
            let fileExtension = path.extname(file.originalname.toLowerCase());
            if (!acceptedExtensions.includes(fileExtension)) {
                throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(", ")}`);
            }
            return true
        }
    }),
]

module.exports = validationsProductsCreate;