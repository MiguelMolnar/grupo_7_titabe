const fs = require("fs");
const path = require("path");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

const usersFilePath = path.join(__dirname, "../data/usersDataBase.json");
let users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

const usersController = {
    register: (req, res) => {
        res.render("./users/register")
    },

    store: (req, res) => {
        const resultValidation = validationResult(req); 
        //Consulto si existen errores y renderizo nuevamente la vista con los mismos
        if(resultValidation.errors.length > 0){
            return res.render("./users/register", {
                errors: resultValidation.mapped(),
                oldData: req.body
            })
        }
        if(users.find(oneUser => oneUser.email == req.body.email)){
            return res.render("./users/register", {
                errors: {
                    email: {
                        msg: 'Este email ya está registrado'
                    }
                },
                oldData: req.body
            })
        }
        let userToRegister = req.body;
        let pass = userToRegister.password;
        let newUser = {
            id: users[users.length -1 ].id + 1,
            ...userToRegister,
            password: bcrypt.hashSync(pass, 10),
            image: req.file ? req.file.filename : "default.jpg"
        }
        users.push(newUser)
        fs.writeFileSync(usersFilePath, JSON.stringify(users, null, " "));
        res.redirect("/users/login");
    },

    login: (req, res) => {
        res.render("./users/login")
    },
    loginProcess: (req, res) => {
        const resultValidation = validationResult(req); 
        
        if(resultValidation.errors.length > 0){
            return res.render("./users/login", {
                errors: resultValidation.mapped(),
                oldData: req.body
            })
        };
        const userToLogin = users.find(oneUser => oneUser.email == req.body.email);
        if (userToLogin) {
            const isPaswordCorrect = bcrypt.compareSync(req.body.password, userToLogin.password)
            if (isPaswordCorrect) {
                delete userToLogin.password;
                req.session.userLogged = userToLogin;
                if (req.body.recordame != undefined) {
                    res.cookie('recordame', req.session.userLogged.email, { maxAge: 100000 })
                }
                res.redirect('/');
            };
        };
    },
    logout: (req,res) => {
        req.session.destroy();
        return res.redirect('/');
    }
}

module.exports = usersController;