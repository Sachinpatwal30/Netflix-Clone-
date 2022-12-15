const User = require("../models/User");
const { create } = require("../models/User");
const createError = require("../utils/error");



const updateUser=async (req, res,next) => {

        try {
            if (req.body.password) {
                req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString();
            }
            await User.findByIdAndUpdate(req.params.id, { $set: { ...req.body } });
            res.status(200).json("User Updated  Successfully");
        }
        catch (error) {
            return next(error);
        }
   

}


const deleteUser=async (req, res,next) => {

        try {
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json("User Deleted Successfully");
        } catch (error) {
            return next(error);
        }

 

}


const getUser=async (req, res,next) => {

    try {

        const user = await User.findById(req.params.id);
        const { password, ...other } = user._doc;
        res.status(200).json(other);

    } catch (error) {
        return next(error);
    }

}




const getAllUsers=async (req, res,next) => {

    const query = req.query.new;    //true
    
        try {

            const user = query ? await User.find().sort({ _id: 1 }).limit(10) : await User.find();
            res.status(200).json(user);

        } catch (error) {
            return next(error);
        }

  

}


const getUserStats=async (req, res,next) => {
    const today = new Date();
    const latYear = today.setFullYear(today.setFullYear() - 1);

    try {
        const data = await User.aggregate([
            {
                $project: {

                    username: 1,
                    "month": { $month: "$createdAt" },
                }
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: 1 },
                },
            },

        ]);
        res.status(200).json(data)
    } catch (err) {
        return next(err);
    }
}


module.exports={updateUser,deleteUser,getUser,getAllUsers,getUserStats}