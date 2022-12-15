const router = require("express").Router();
const CryptoJS = require("crypto-js");
const User = require("../models/User");
const verify = require("../delete/verifyToken");
const {updateUser,deleteUser,getUser,getAllUsers,getUserStats}= require("../controllers/usersController");
const { verifyUser } = require("../utils/verifyJwt");

//UPDATE
router.put("/:id", verifyUser,updateUser );


//DELETE
router.delete("/:id", verifyUser, deleteUser);


//GET
router.get("/find/:id",getUser );

//GET ALL USERS. if we give query i.e auth/users/?new=true && find().sort({_id:-1}).limit(10) will find last 10 documents only, if sort({_id:1})  it will find first 5 documents only
router.get("/",verifyUser, getAllUsers );


//GET USER STATS
router.get("/stats",getUserStats );




module.exports = router;