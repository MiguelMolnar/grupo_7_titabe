const path = require('path');

const productsController = {
    cart: (req, res) => {
        res.render(path.join(__dirname, '../views/productCart.ejs'))
    },
    detail: (req, res) => {
        res.render(path.join(__dirname, '../views/productDetail.ejs'))
    },
    modify: (req, res) => {
        res.render(path.join(__dirname, '../views/productModify.ejs'))
    },
}




module.exports = productsController;