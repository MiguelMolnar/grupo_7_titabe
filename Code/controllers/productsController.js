const productsController = {
    cart: (req, res) => {
        res.render('./products/productCart.ejs')
    },
    detail: (req, res) => {
        res.render('./products/productDetail.ejs')
    },
    modify: (req, res) => {
        res.render('./products/productModify.ejs')
    },
}




module.exports = productsController;