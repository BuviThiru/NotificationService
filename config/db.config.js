require("dotenv").config()
const notification_URI = process.env.Mongo_URL || 'mongodb://127.0.0.1:27017/notificationDB';
module.exports = notification_URI