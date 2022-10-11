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
        let userToRegister = req.body;
        let contrasena = userToRegister.password;
        let newUser = {
            ...userToRegister,
            password: bcrypt.hashSync(contrasena, 10),
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
        const userToLogin = users.find(oneUser => oneUser.email == req.body.email);
        if (userToLogin) {
            const isPaswordCorrect = bcrypt.compareSync(req.body.password, userToLogin.password)
            if (isPaswordCorrect) {
                delete userToLogin.password;
                req.session.userLogged = userToLogin;
                if (req.body.recordame != undefined) {
                    res.cookie('recordame', req.session.userLogged.user, { maxAge: 100000 })
                }
                res.redirect('/');
            };
        };
    },
}

module.exports = usersController;