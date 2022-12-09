const router = require("express").Router();
const Movies = require("../models/Movies");
const verify = require("../verifyToken");



//Create
router.post("/", verify, async (req, res) => {

    if (req.user.isAdmin) {

        const newMovie = new Movies(req.body);

        try {
            const movie = await newMovie.save();
            res.status(200).json(movie);

        } catch (error) {

            res.status(401).json(error);
        }

    } else {

        return res.status(403).json("You are not allowed to add movie");
    }

});

//Update
router.put("/:id", verify, async (req, res) => {

    if (req.user.isAdmin) {

        try {
            const UpdateMovie = await Movies.findByIdAndUpdate(req.params.id, {

                $set: { ...req.body }

            }, { new: true });
            res.status(200).json(UpdateMovie);

        } catch (error) {

            res.status(401).json(error);
        }

    } else {

        return res.status(403).json("You not not allowed to update movie");
    }

});

//Delete
router.delete("/:id", verify, async (req, res) => {

    if (req.user.isAdmin) {

        try {
            await Movies.findByIdAndDelete(req.params.id);
            res.status(200).json("Movies deleted successfully");

        } catch (error) {

            res.status(401).json(error);
        }

    } else {

        return res.status(403).json("You are not allowed to delete movie");
    }

});

//Get movie
router.get("/find/:id", verify, async (req, res) => {

    try {
        const movie = await Movies.findById(req.params.id);
        res.status(200).json(movie);

    } catch (error) {
        res.status(401).json(error);
    }

});


//Get Random Movies 
router.get("/random", verify, async (req, res) => {


    const query = req.query.type;
 
    
    let movie;

    try {

        if (query === "series") {
            movie = await Movies.aggregate([
                { $match: { isSeries: true } },
                { $sample: { size: 1 } }
            ])
        }
        else {

            movie = await Movies.aggregate([
                { $match: { isSeries: false } },
                { $sample: { size: 1 } }
            ])

        }
         
        res.status(200).json(movie);

    } catch (error) {
        res.status(401).json(error);
    }

});

//Get all movies
router.get("/", verify, async (req, res) => {

    if (req.user.isAdmin) {

        try {
            const movie = await Movies.find();
            res.status(200).json(movie);

        } catch (error) {

            res.status(401).json(error);
        }

    } else {

        return res.status(403).json("You are not allowed to get all movie");
    }

});





module.exports = router;