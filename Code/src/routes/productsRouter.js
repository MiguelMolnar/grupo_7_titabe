const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

//Declaración de variables de Multer para subir imagenes
var storage = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null, path.join(__dirname,'/../../public/images/products'));
    },
    filename : (req, file, cb) => {
        cb(null, 'img-' + Date.now() + path.extname(file.originalname));
    }
})
var upload = multer ({storage:storage});

const {body} = require('express-validator');
const productsController = require('../controllers/productsController')

//Validaciones
const validationsProductsCreate = [
    body('productName').notEmpty().withMessage('Este campo no debe estar vacío.').isLength({min: 5}).withMessage('Debe tener al menos 5 caracteres.'),
    body('productDescriptionShort').notEmpty().withMessage('Este campo no debe estar vacío.').isLength({min: 5}).withMessage('Debe tener al menos 5 caracteres.'),
    body('productDescriptionLong').notEmpty().withMessage('Este campo no debe estar vacío.').isLength({min: 20}).withMessage('Debe tener al menos 20 caracteres.'),
    body('productPrice').notEmpty().withMessage('Este campo no debe estar vacío.').isNumeric().withMessage('Debe haber un precio.'),
    body('productCategory').notEmpty().withMessage('Este campo no debe estar vacío.'),   
    body('productImage').custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = ["png", "jpeg", "gif", "jpg"];
        
        if (!file) {
            throw new Error("Tenes que subir una imagen");
        } else {
            let fileExtension = path.extname(file.originalname);
            if (!acceptedExtensions.includes(fileExtension)) {
                throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(", ")}`);
            }
        }
    }),
]
const validationsProductsModify = [
    body('productName').notEmpty().withMessage('Este campo no debe estar vacío.').isLength({min: 5}).withMessage('Debe tener al menos 5 caracteres.'),
    body('productDescriptionShort').notEmpty().withMessage('Este campo no debe estar vacío.').isLength({min: 5}).withMessage('Debe tener al menos 5 caracteres.'),
    body('productDescriptionLong').notEmpty().withMessage('Este campo no debe estar vacío.').isLength({min: 20}).withMessage('Debe tener al menos 20 caracteres.'),
    body('productPrice').notEmpty().withMessage('Este campo no debe estar vacío.').isNumeric().withMessage('Debe haber un precio.'),
    body('productCategory').notEmpty().withMessage('Este campo no debe estar vacío.'),   
    body('productImage').custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = ["png", "jpeg", "gif", "jpg"];
        
        if (!file) {
            throw new Error("Tenes que subir una imagen");
        } else {
            let fileExtension = path.extname(file.originalname);
            if (!acceptedExtensions.includes(fileExtension)) {
                throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(", ")}`);
            }
        }
    }),
]



//Listado de productos
router.get('/', productsController.index); 

//Formulario de creación de productos
router.get('/create', productsController.create);
router.post('/', upload.single('productImage'), validationsProductsCreate, productsController.store);

//Detalle de producto
router.get('/detail/:id', productsController.detail);

//Edicion de producto
router.get('/:id/edit', productsController.modify);
router.put('/:id', upload.single('productImage'), validationsProductsModify, productsController.update);

//Borrado de producto
router.delete('/:id', productsController.delete);

//Carro de compras
 
module.exports = router;