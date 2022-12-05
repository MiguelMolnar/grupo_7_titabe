const db = require('../database/models');

function userLoggedMiddleware (req,res,next) {
        res.locals.isLogged = false;
        if(req.cookies.remember != undefined){
            db.User.findOne({
                where: {email : req.cookies.remember}
            })
            .then((userFromCookie)=> {
                if (req.cookies.remember != undefined && req.session.userLogged == undefined) {
                    req.session.userLogged = userFromCookie;
                }
            })
            .catch((e)=>console.log(e))
        }

        if(req.session.userLogged) {
            res.locals.isLogged = true;
            res.locals.userLogged = req.session.userLogged
        }

    next();
}

module.exports = userLoggedMiddleware;