const {createTicNotification} = require('../controller/ticNotification.controllers')

const routes = (app)=>{
    app.post("/notificationService/api/vi/createTicNotification", createTicNotification)
}

module.exports = routes