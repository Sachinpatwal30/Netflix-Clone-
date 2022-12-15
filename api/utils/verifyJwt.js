const jwt = require("jsonwebtoken");
const createError = require("./error");


const verifyToken = (req, res, next) => {

    const token = req.cookies.access_token;

    if (!token) {
        return next(createError(401, "You are not authenticated!"));
    }

    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {

        if (err) return next(createError(403, "Invalid token !"));
        req.user = user;
        console.log(user);
        console.log("Token is valid");
        return next();
    });
};

const verifyUser = (req, res, next) => {
    

    console.log("Verifying user");

    verifyToken(req, res, () => {

        if(!req.params.id) return next();
        
        if (req.user.isAdmin || req.user.id === req.params.id ) {
            return next();
        } else {
            return next(createError(403, "You  are not authorized!"));
        }
    });
};


const verifyAdmin = (req, res, next) => {

    console.log("Verifying Admin");
    console.log(req.user);

    console.log("Verifying Admin",req.user.isAdmin);

    verifyToken(req, res, next, () => {
        if (req.user.isAdmin)
            return next();
        else return next(createError(403, "You are yooooooo not Authorized"));
    });


}

module.exports = { verifyAdmin, verifyUser };