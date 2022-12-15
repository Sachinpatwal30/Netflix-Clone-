const router = require("express").Router();
const { register, login } = require("../controllers/authController");


//Register Route
router.post("/register", register);

//Login Route

router.post("/login",login );


module.exports = router;