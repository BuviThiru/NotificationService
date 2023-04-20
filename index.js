const express = require("express");
const app = express();
const PORT = require('./config/server.config')
const URL = require("./config/db.config")
const mongoose = require("mongoose")
const ticketNotificationRoutes = require("./routes/ticNotication.routes")
const {job} = require('./crons/ticNotification.cron')

const {sendNotificationMail} = require('./notifier/emailNotifier')
const bodyParcer = require('body-parser');

app.use(bodyParcer.json());
app.use(bodyParcer.urlencoded({extended:true}))
ticketNotificationRoutes(app);

app.listen(PORT,()=>{
    console.log("App listening to the port", PORT)   
       mongoose.connect(URL); 
    //    job.start();
  })