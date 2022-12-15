const router = require("express").Router();
const { createList, deleteList, getList } = require("../controllers/listController");
const List = require("../models/List");
const {  verifyUser } = require("../utils/verifyJwt");


//Create
router.post("/", verifyUser, createList );


//Delete
router.delete("/:id", verifyUser, deleteList);


//Get 
router.get("/", getList );

module.exports = router;


