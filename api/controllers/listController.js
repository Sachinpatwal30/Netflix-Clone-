const List = require("../models/List");
const createError = require("../utils/error");



const createList = async (req, res,next) => {

    if (req.user.isAdmin) {

        const newList = new List(req.body);

        try {
            const list = await newList.save();
            res.status(200).json(list);

        } catch (error) {
            return next(error);
        }

    } else {
        return next(createError(403,"You are not allowed to add movie"));
    }

}

const deleteList= async (req, res,next) => {

    if (req.user.isAdmin) {

        try {
            await List.findByIdAndDelete(req.params.id);
            res.status(200).json("List deleted successfully");

        } catch (error) {
            return next(error);
        }

    } else {

        return next(createError(403,"You are not allowed to delete movie"))
    }
}

const getList= async (req, res,next) => {
    const typeQuery = req.query.type;
    const genreQuery = req.query.genre;
    let list = [];
    try {
        if (typeQuery) {
            if (genreQuery) {
                list = await List.aggregate([
                    { $sample: { size: 10 } },
                    { $match: { type: typeQuery, genre: genreQuery } },
                ]);
            } else {
                list = await List.aggregate([
                    { $sample: { size: 10 } },
                    { $match: { type: typeQuery } },
                ]);
            }
        } else {
            list = await List.aggregate([{ $sample: { size: 10 } }]);
        }
        res.status(200).json(list);
    } catch (err) {
        return next(err);
    }
}

module.exports= {createList,deleteList,getList}