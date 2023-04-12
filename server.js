const express = require("express");
const app = express();
const port = require('./config/server.config')
const URL = require("./config/db.config")
const mongoose = require("mongoose")
const ticketNotificationRoutes = require("./routes/ticNotication.routes")

ticketNotificationRoutes(app);

app.listen(port,()=>{
    console.log("App listening to the port", port)

    //connecting to the db

    mongoose.connect(URL) 
})