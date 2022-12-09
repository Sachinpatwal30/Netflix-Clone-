const mongoose= require('mongoose');


const userSchema = new mongoose.Schema({


    username:{type:String, unique:true, require:true},
    email:   {type:String, require:true, unique:true},
    password:{type:String, require:true},
    profilePicture:{type:String, default:""},
    isAdmin:{type:Boolean, default:false}

},{timestamps:true})


module.exports = mongoose.model("User",userSchema);
