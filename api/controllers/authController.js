const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const createError = require("../utils/error");


const register = async (req, res) => {

    const newUser = new User({
        ...req.body,
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString()
    });

    try {
        const user = await newUser.save();
        res.status(200).json(user);

    } catch (error) {
        return next(err);
    }
}

const login = async (req, res) => {

    try {

        const user = await User.findOne({ email: req.body.email });
        if (!user) return res.status(401).json("User not found ");
        if (req.body.password === CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY).toString(CryptoJS.enc.Utf8)) {
            const accessToken = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.SECRET_KEY, { expiresIn: '5d' });
            const { password, ...info } = user._doc;
            res.cookie("access_token", accessToken, { httpOnly: true }).status(200).json(info);

        }
        else
            return next(createError(403, "Incorrect Password"));

    } catch (error) {
        return next(err);
    }

}

module.exports = { register, login }