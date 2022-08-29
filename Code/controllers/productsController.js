const productsController = {
    cart: (req, res) => {
        res.render('productCart.ejs')
    },
    detail: (req, res) => {
        res.render('productDetail.ejs')
    },
    modify: (req, res) => {
        res.render('productModify.ejs')
    },
}




module.exports = productsController;