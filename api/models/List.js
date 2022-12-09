const mongoose = require('mongoose');


const listSchema = new mongoose.Schema({

    title: { type: String, unique: true, require: true },
    type: { type: String },
    genre: { type: String },
    content: { type: Array },

}, { timestamps: true })


module.exports = mongoose.model("List", listSchema);
