const express = require ("express");
const app = express();
const mongoose= require("mongoose");
require("dotenv").config();
const authRoute=require("./routes/auth")
const userRoute = require("./routes/users");
const moviesRoute= require("./routes/movies");
const listRoute= require("./routes/list");
var cookieParser = require('cookie-parser')



mongoose.connect(process.env.MONGODB_URL)
.then(()=>{console.log("Connected to MongoDB");})
.catch((err)=>{console.log(err);})


//middleware
app.use(express.json());// now it will accept json format in request
app.use(cookieParser())


app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use ("/api/movies", moviesRoute);
app.use ("/api/lists", listRoute);


app.use((err,req,res,next)=>{

    const errorStatus= err.status|| 500;
    const errorMessage= err.message|| "Oops Something went wrong";

    res.status(errorStatus).json({
        succuss:false,
        errorStatus,
        errorMessage,
        stack:err.stack,
    })
})




app.listen(8080,()=>{
    console.log("server listening on port 8080");
})