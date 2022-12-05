const db = require('../database/models');
const { Op } = require("sequelize");

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const indexController = {
    home: (req,res) => {
        res.render('./users/index');
    },
    search: async (req, res) => {
		try {
			const products = await db.Product.findAll({
                where: {name: { [Op.substring] : req.query.search }},
				include: {
					association: 'products_images',
                    where: { main: 1 }
				}
			})
            if(!products) {
				res.status(404).json({error: 'No encontrado'});
				return
			};
			res.render('./products/products', {products, toThousand});
		} catch(e) {
			res.status(500).json({ error: e })
		}	
	},
};

module.exports = indexController;