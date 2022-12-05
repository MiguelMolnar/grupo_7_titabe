const express = require('express');
const router = express.Router();

//Controller
const productsController = require('../controllers/productsController')

//Middlewares
const productsMulterMiddleware = require('../middlewares/productsMulterMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const validationsProductsCreate = require('../middlewares/validationsCreate');
const validationsProductsModify = require('../middlewares/validationsModify');

//Listado de productos
router.get('/', productsController.index);

//Filtro de categorias
router.get('/category/:id', productsController.indexCategory)
router.get('/subcategory/:id', productsController.indexSubcategory)

//Detalle de producto
router.get('/detail/:id', productsController.detail);

//Formulario de creación de productos 
router.get('/create', productsController.create);
router.post('/', productsMulterMiddleware.fields([{name: 'productImageMain', maxCount: 1} , {name: 'productImages' , maxCount: 3}]), validationsProductsCreate, productsController.store);

//Edicion de producto
router.get('/:id/edit', authMiddleware, productsController.modify);
router.put('/:id', validationsProductsModify, productsController.update);

//Borrado de producto
router.delete('/:id', productsController.delete);

//Carro de compras
router.get('/cart', productsController.cart);

module.exports = router;