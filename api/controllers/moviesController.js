const Movies = require("../models/Movies");
const createError = require("../utils/error");

const createMovie = async (req, res, next) => {

    const newMovie = new Movies(req.body);

    try {
        const movie = await newMovie.save();
        res.status(200).json(movie);

    } catch (error) {
        return next(error);
    }



}


const UpdateMovie = async (req, res, next) => {



    try {
        const UpdateMovie = await Movies.findByIdAndUpdate(req.params.id, {

            $set: { ...req.body }

        }, { new: true });
        res.status(200).json(UpdateMovie);

    } catch (error) {

        return next(error);
    }



}


const deleteMovie = async (req, res, next) => {


    try {
        await Movies.findByIdAndDelete(req.params.id);
        res.status(200).json("Movies deleted successfully");

    } catch (error) {

        return next(error);
    }



}



const getMovie = async (req, res, next) => {

    try {
        const movie = await Movies.findById(req.params.id);
        res.status(200).json(movie);

    } catch (error) {
        return next(error);
    }

}



const getRandomMovie = async (req, res, next) => {


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
        return next(error);
    }

}


const getAllMovies = async (req, res, next) => {

    try {
        const movie = await Movies.find();
        res.status(200).json(movie);

    } catch (error) {

        return next(error);
    }


}




module.exports = { createMovie, UpdateMovie, deleteMovie, getMovie, getRandomMovie, getAllMovies }