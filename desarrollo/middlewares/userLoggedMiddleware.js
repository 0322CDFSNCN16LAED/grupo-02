module.exports = (req, res, next) => {
    res.locals.isLogged = false;

    if (req.session.loggedUser) {
        res.locals.isLogged = true
    }

    next();
}