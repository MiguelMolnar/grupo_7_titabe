const { sequelize } = require('../database/models');
const db = require('../database/models');

const apiController = {
    users: async (req, res) => {
        try {
            const allUsers = await db.User.findAndCountAll()
            let response = {
                count: allUsers.count,
                users: allUsers.rows.map((user)=>{
                    return {
                        id: user.id,
                        name: user.fullName,
                        email: user.email,
                        detail: `api/users/${user.id}`
                    }
                })
            }
            res.json(response)

        } catch(e) {
			res.status(500).json({ error: e })
		}
    },
    user: async (req,res) => {
        try {
            const oneUser = await db.User.findByPk(req.params.id)
            let response = {
                id: oneUser.id,
                name: oneUser.fullName,
                email: oneUser.email,
                picture: `/public/images/users/${oneUser.image}`
            }
            res.json(response)

        } catch(e) {
			res.status(500).json({ error: e })
		}
    },
    products: async (req,res) => {
        try {
            const allProducts = await db.Product.findAndCountAll({
                include: {association: 'subcategories'}
            })
            const subcategoriesCount = await db.Subcategory.findAll({
                attributes: ['name', [sequelize.fn('COUNT', sequelize.col('products.subcategory_id')), 'subcategoriesCount']],
                include: {association: 'products', attributes: []},
                group: 'id'
            })
            
            let response = {
                count: allProducts.count,
                countByCategory: subcategoriesCount,
                products: allProducts.rows.map((product)=>{
                    return {
                        id: product.id,
                        name: product.name,
                        description: product.descriptionShort,
                        subcategory: product.subcategories,
                        detail: `api/products/${product.id}`
                    }
                })
            }
            res.json(response)
        } catch (e) {
            res.status(500).json({ error: e })
        }
    },
    product: async (req,res) => {
        try {
            const oneProduct = await db.Product.findByPk(req.params.id, {
				include: {
							association: 'products_images',
							where: { main: 1 }
						}
            })
            let response = {
                id: oneProduct.id,
                name: oneProduct.name,
                description: oneProduct.descriptionShort,
                picture: `/public/images/products/${oneProduct.products_images[0].name}`
            }
            res.json(response)
        } catch (e) {
            res.status(500).json({ error: e })
        }
    }
}
module.exports = apiController;