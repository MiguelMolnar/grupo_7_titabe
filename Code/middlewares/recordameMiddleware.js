const fs = require('fs');
const path = require('path');

function recordame(req, res, next) {
    if (req.cookies.recordame != undefined && req.session.userLogged == undefined) {
        const usersFilePath = path.join(__dirname, "../src/data/usersDataBase.json");
        let users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

        const userToLogin = users.find(oneUser => oneUser.user == req.cookies.recordame);
        if (userToLogin) {
            delete userToLogin.pass;
            req.session.userLogged = userToLogin;
            res.redirect('/');
        }
    }
    next();
}


module.exports = recordame;