const jwt = require("jsonwebtoken");


const verify=(req, res, next)=> {

    const authHeader = req.headers.token;

    if (!authHeader) return res.status(401).json("JWT token not found");

    const token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.SECRET_KEY, (err, payload) => {

        if (err) return res.status(403).json("Invalid Token");
        req.user = payload;
        next();

    });

}

module.exports = verify;