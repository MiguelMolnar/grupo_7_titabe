const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const indexController = {
    home: (req,res) => {
        res.render('./users/index', {products:products , toThousand});
    },
    search: (req, res) => {
		// pendiente
	},
    register: (req,res) => {
        res.render('./users/register');
    },
    login: (req,res) => {
        res.render('./users/login');
    },
};

module.exports = indexController;