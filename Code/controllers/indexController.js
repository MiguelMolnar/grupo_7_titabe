const indexController = {
    home: (req,res) => {
        res.render('index.ejs')
    },
    register: (req,res) => {
        res.render('register.ejs')
    },
    login: (req,res) => {
        res.render('login.ejs')
    },
}




module.exports = indexController;