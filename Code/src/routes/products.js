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


const productsController = require('../controllers/productsController')

//Listado de productos
router.get('/', productsController.index); 

//Formulario de creación de productos
router.get('/create', productsController.create);
router.post('/', upload.single('productImage'), productsController.store);

//Detalle de producto
router.get('/detail/:id', productsController.detail);

//Edicion de producto
router.get('/:id/edit', productsController.modify);
router.put('/:id', productsController.update);

//Borrado de producto
router.delete('/:id', productsController.delete);

//Carro de compras
router.get('/cart', productsController.cart);

module.exports = router;