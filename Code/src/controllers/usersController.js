const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const db = require('../database/models');

const usersController = {
    register: (req, res) => {
        res.render("./users/register", {session : req.session})
    },

    store: async (req, res) => {
        
        const resultValidation = validationResult(req); 

        //Consulto si existen errores y renderizo nuevamente la vista con los mismos
        if(resultValidation.errors.length > 0){
            return res.render("./users/register", {
                errors: resultValidation.mapped(),
                oldData: req.body,
                session: req.session
            })
        }
        
        //Chequeo que no existan usuarios con ese mail
        const userRegistered = await db.User.findOne({
            where: {email : req.body.email}
        })
        if(userRegistered){
            return res.render("./users/register", {
                errors: {
                    email: {
                        msg: 'Este email ya está registrado'
                    }
                },
                oldData: req.body
            })
        }
        
        //Comparo que las dos contaseñas coincidan
        if(req.body.password != req.body.passwordCheck){
            return res.render("./users/register", {
                errors: {
                    password: {
                        msg: 'Las contraseñas no coinciden'
                    }
                },
                oldData: req.body
            })
        }

        try{
            const newUser = await db.User.create({
                fullName: req.body.fullName,
                email: req.body.email,
                phoneNumber: parseInt(req.body.phoneNumber),
                address: req.body.address,
                password: bcrypt.hashSync(req.body.password , 10),
                image: req.file ? req.file.filename : "default.jpg",
                role_id: req.body.role ? req.body.role : 3
            })
    
            return res.redirect("/users/login");

        } catch(e) {
			res.status(500).json({ error: e })
		}

    },

    login: (req, res) => {
        res.render("./users/login")
    },

    loginProcess: async (req, res) => {
        try {
            const userToLogin = await db.User.findOne({
                where: {email : req.body.email}
            })
            if (userToLogin) {
                const isPaswordCorrect = bcrypt.compareSync(req.body.password, userToLogin.password)
                if (isPaswordCorrect) {
                    delete userToLogin.password;
                    req.session.userLogged = userToLogin;
                    if (req.body.remember) {
                        res.cookie('remember', req.session.userLogged.email, { maxAge: 100000 })
                    }
                    return res.redirect('/');
                };
                return res.render("./users/login", {
                    errors: {
                        email: {
                            msg: 'Las credenciales son inválidas'
                        }
                    }
                });
            }
            return res.render("./users/login", {
                errors: {
                    email: {
                        msg: 'No se encuentra el email registrado'
                    }
                }
            });

        } catch(e) {
			res.status(500).json({ error: e })
		}
    },

    logout: (req,res) => {
        res.clearCookie('remember');
        req.session.destroy();
        return res.redirect('/');
    }
}

module.exports = usersController;