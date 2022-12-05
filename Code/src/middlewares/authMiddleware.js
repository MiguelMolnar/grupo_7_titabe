function authMiddleware (req,res,next) {
    if (!req.session.userLogged || req.session.userLogged.role_id === 3) {
        return res.redirect('/products');
    }
    next();
}
module.exports = authMiddleware;