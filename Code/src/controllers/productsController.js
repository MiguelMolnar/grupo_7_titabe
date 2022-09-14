const { json } = require('express');
const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const productsController = {
	//Todos los productos
    index: (req, res) => {
        res.render('./products/products', {products:products, toThousand});
    },

	//Creat un producto
    create: (req, res) => {
        res.render('./products/productCreate') //crear nueva vista para creacion
    },
	//Formulario de creacion de un producto
    store: (req, res) => {
        let newProduct = {
			id : products[products.length -1 ].id + 1, //cambiar para buscar el id mas grande
			name : req.body.productName,
			descriptionShort : req.body.productDescriptionShort,
			descriptionLong : req.body.productDescriptionLong,
			price : parseInt(req.body.productPrice),
			category : req.body.productCategory,
			image : req.file ? req.file.filename : 'default-image.png'
		}
		products.push(newProduct);
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
		res.redirect('/products');
    },

	//Detalle de un producto
    detail: (req, res) => {
        let product = products.find(element => element.id == req.params.id)
		res.render('./products/productDetail', {product:product, toThousand});
    },

	//Modificar un producto
    modify: (req, res) => {
        let product = products.find(element => element.id == req.params.id)
		res.render('./products/productModify', {product:product, toThousand});
    },
	//Formulario de modificacion de producto
    update: (req, res) => {
        let index = products.indexOf(products.find(element => element.id == req.params.id));
		products[index]={
			id : products[index].id,
			name : req.body.productName,
			descriptionShort : req.body.productDescriptionShort,
			descriptionLong : req.body.productDescriptionLong,
			price : parseInt(req.body.productPrice),
			category : req.body.productCategory,
			image : products[index].image
		}
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
		res.redirect('/products/');
    },

	//Formulario de eliminacion de un producto
    delete: (req, res) => {
        let index = products.indexOf(products.find(element => element.id == req.params.id));
		products.splice(index, 1);
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
		res.redirect('/products/');
    },

	//Carrito de compras
    cart: (req, res) => {
        res.render('./products/productCart')
    },
    
    
}

module.exports = productsController;