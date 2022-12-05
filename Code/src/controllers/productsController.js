const { json } = require('express');
const db = require('../database/models');
const { validationResult } = require("express-validator");

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const productsController = {
	//Todos los productos
    index: async (req, res) => {
		try{
			const products = await db.Product.findAll({
				//Incluir la tabla imagenes y obtener la principal
				include: {
							association: 'products_images',
							where: { main: 1 }
						},
				//Ordenar para que aparezcan primero las ofertas y al último los productos sin stock
				order: [
					['offer', 'DESC'],  
					['stock', 'DESC']
				]
			})
			if(!products) {
				res.status(404).json({error: 'No encontrado'});
				return
			};

			res.render('./products/products', {products, toThousand, session: req.session})

		} catch(e) {
      		res.status(500).json({ mensaje: 'Lo sentimos no se pudo establecer la conexion con la base de datos', error: e })
		}     
    },

	//Vista filtrada por categorias
	indexCategory: async (req,res) => {
		try{
			const products = await db.Product.findAll({
				//where: { subcategory_id : req.params.id },
				//Incluir la tabla imagenes y obtener la principal
				include: [{
							association: 'products_images',
							where: { main: 1 }
						},
						{
							association: 'subcategories',
							where: { category_id: req.params.id }
						}],
				//Ordenar para que aparezcan primero las ofertas y al último los productos sin stock
				order: [
					['offer', 'DESC'],  
					['stock', 'DESC']
				]
			})
			if(!products) {
				res.status(404).json({error: 'No encontrado'});
				return
			};

			res.render('./products/products', {products, toThousand, session: req.session})

		} catch(e) {
      		res.status(500).json({ mensaje: 'Lo sentimos no se pudo establecer la conexion con la base de datos', error: e })
		}  
	},

	//Vista filtrada por subcategorias
	indexSubcategory: async (req,res) => {
		try{
			const products = await db.Product.findAll({
				where: { subcategory_id : req.params.id },
				//Incluir la tabla imagenes y obtener la principal
				include: {
							association: 'products_images',
							where: { main: 1 }
						},
				//Ordenar para que aparezcan primero las ofertas y al último los productos sin stock
				order: [
					['offer', 'DESC'],  
					['stock', 'DESC']
				]
			})
			if(!products) {
				res.status(404).json({error: 'No encontrado'});
				return
			};

			res.render('./products/products', {products, toThousand, session: req.session})

		} catch(e) {
      		res.status(500).json({ mensaje: 'Lo sentimos no se pudo establecer la conexion con la base de datos', error: e })
		}  
	},

	//Vista crear un producto
    create: (req, res) => {
        res.render('./products/productCreate') //crear nueva vista para creacion
    },

	//Formulario de creacion de un producto
    store: async (req, res) => {
		const resultValidation = validationResult(req); 
        
        if(resultValidation.errors.length > 0){
            return res.render('./products/productCreate', {
                errors: resultValidation.mapped(),
                oldData: req.body
            })
        };
		
        try {
			const product = await db.Product.create({
				name : req.body.productName,
				descriptionShort : req.body.productDescriptionShort,
				descriptionLong : req.body.productDescriptionLong,
				price : parseInt(req.body.productPrice),
				subcategory_id : req.body.productSubcategory,
				offer : parseInt(req.body.productDiscount) !== 0 ? 1 : 0,
				discount : parseInt(req.body.productDiscount) !== 0 ? parseInt(req.body.productDiscount) : 0,
				stock : req.body.productStock != undefined ? 1 : 0,
				products_images : [
					{name : req.files.productImageMain[0].filename, main : 1},
					{name : req.files.productImages[0].filename , main : 0},
					{name : req.files.productImages[1].filename , main : 0},
					{name : req.files.productImages[2].filename , main : 0},
				]
			},{
				include : {association : 'products_images'}
			});
			
			res.redirect('/products')

		} catch(e) {
			res.status(500).json({ error: e })
		}
	},

	//Detalle de un producto
    detail: async (req, res) => {
		try {
			const product = await db.Product.findByPk(req.params.id , {
				include: {
					association: 'products_images'
				}
			})
			res.render('./products/productDetail', {product, toThousand, session: req.session });
		} catch(e) {
			res.status(500).json({ error: e })
		}		
    },

	//Modificar un producto
    modify: async (req, res) => {
		try {
			const product = await db.Product.findByPk(req.params.id , {
				include: {
					association: 'products_images'
				}
			})
			const categories = await db.Category.findAll();
			const subcategories = await db.Subcategory.findAll();
			res.render('./products/productModify', {product, categories, subcategories, toThousand});
		} catch(e) {
			res.status(500).json({ error: e })
		}
    },

	//Formulario de modificacion de producto
    update: async (req, res) => {
		const resultValidation = validationResult(req); 
        
        if(resultValidation.errors.length > 0){
			try {
				const product = await db.Product.findByPk(req.params.id , {
					include: {
						association: 'products_images'
					}
				})
				const categories = await db.Category.findAll();
				const subcategories = await db.Subcategory.findAll();
				return res.render('./products/productModify', {errors: resultValidation.mapped(), oldData: req.body, product, categories, subcategories, toThousand});
			} catch(e) {
				res.status(500).json({ error: e })
			}
        };

		try {
			const product = await db.Product.update({
				name : req.body.productName,
				descriptionShort : req.body.productDescriptionShort,
				descriptionLong : req.body.productDescriptionLong,
				price : parseInt(req.body.productPrice),
				subcategory_id : req.body.productSubcategory,
				offer : parseInt(req.body.productDiscount) !== 0 ? 1 : 0,
				discount : parseInt(req.body.productDiscount) !== 0 ? parseInt(req.body.productDiscount) : 0,
				stock : req.body.productStock != undefined ? 1 : 0,
			},{
				where: { id : req.params.id	}
			})
			res.redirect(`/products/detail/${req.params.id}`);

		} catch(e) {
			res.status(500).json({ error: e })
		}
    },

	//Formulario de eliminacion de un producto
    delete: async (req, res) => {
		try {
			const images = await db.Product_image.destroy({
				where: { product_id : req.params.id	}
			})
			const product = await db.Product.destroy({
				where: { id : req.params.id	}
			})

			res.redirect('/products/');

		} catch(e) {
			res.status(500).json({ error: e })
		}
    },

	//Carrito de compras
    cart: (req, res) => {
        res.render('./products/productCart')
    },
    
    
}

module.exports = productsController;