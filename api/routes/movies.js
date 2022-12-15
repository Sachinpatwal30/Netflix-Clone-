const router = require("express").Router();
const { verify } = require("jsonwebtoken");
const { createMovie, UpdateMovie, deleteMovie, getMovie, getRandomMovie, getAllMovies } = require("../controllers/moviesController");
const {  verifyUser } = require("../utils/verifyJwt");



//Create
router.post("/", verifyUser, createMovie );

//Update
router.put("/:id", verify,UpdateMovie);

//Delete
router.delete("/:id", verifyUser, deleteMovie);

//Get movie
router.get("/find/:id",getMovie);


//Get Random Movies 
router.get("/random", getRandomMovie);

//Get all movies
router.get("/", verifyUser, getAllMovies);





module.exports = router;