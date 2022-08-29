const indexController = {
    home: (req,res) => {
        res.render('./users/index.ejs')
    },
    register: (req,res) => {
        res.render('./users/register.ejs')
    },
    login: (req,res) => {
        res.render('./users/login.ejs')
    },
}




module.exports = indexController;