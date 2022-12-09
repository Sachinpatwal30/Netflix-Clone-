const router = require("express").Router();
const CryptoJS = require("crypto-js");
const User = require("../models/User");
const verify = require("../verifyToken");



//UPDATE
router.put("/:id", verify, async (req, res) => {

    if (req.params.id === req.user.id || req.user.isAdmin) {

        try {
            if (req.body.password) {
                req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString();
            }
            await User.findByIdAndUpdate(req.params.id, { $set: { ...req.body } });
            res.status(200).json("User Updated  Successfully");
        }
        catch (error) {
            res.status(200).json(error);
        }
    } else {

        return res.status(403).json("You can update only your account");
    }

});


//DELETE
router.delete("/:id", verify, async (req, res) => {


    if (req.params.id === req.user.id || req.user.isAdmin) {

        try {
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json("User Deleted Successfully");
        } catch (error) {
            res.status(200).json(error);
        }

    } else {
        return res.status(403).json("You can Delete only your account");
    }

});


//GET
router.get("/find/:id", async (req, res) => {

    try {

        const user = await User.findById(req.params.id);
        const { password, ...other } = user._doc;
        res.status(200).json(other);

    } catch (error) {
        res.status(200).json(error);
    }

});

//GET ALL USERS. if we give query i.e auth/users/?new=true && find().sort({_id:-1}).limit(10) will find last 10 documents only, if sort({_id:1})  it will find first 5 documents only
router.get("/", verify, async (req, res) => {

    const query = req.query.new;    //true


    if (req.user.isAdmin) {
        try {

            const user = query ? await User.find().sort({ _id: 1 }).limit(10) : await User.find();
            res.status(200).json(user);

        } catch (error) {
            res.status(200).json(error);
        }

    } else {
        return res.status(403).json("Only Admin has  access all users");
    }

});


//GET USER STATS

router.get("/stats", async (req, res) => {
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
        res.status(500).json(err);
    }
});




module.exports = router;