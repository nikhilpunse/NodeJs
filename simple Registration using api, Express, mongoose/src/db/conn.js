const mongoose = require("mongoose");

//creating connection to db
mongoose.connect("mongodb://localhost:27017/reistration-db")
.then(()=>console.log("connection successfull"))
.catch((err)=>{console.log(err)});
