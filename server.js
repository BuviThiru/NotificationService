const express = require("express");
const app = express();
const port = require('./config/server.config')
const URL = require("./config/db.config")
const mongoose = require("mongoose")

app.listen(port,()=>{
    console.log("App listening to the port", port)

    //connecting to the db

    mongoose.connect(URL ,()=>{
        console.log("Connected to the DB")
    }, (error)=>{
        console.log(error)
    })
})