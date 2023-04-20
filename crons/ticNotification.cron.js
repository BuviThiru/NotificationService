const {getAllUnsentNotifications, setStatusSent} = require('../services/ticNotification.services')
const { sendNotificationMail } = require("../notifier/emailNotifier");

var CronJob = require("cron").CronJob;
var job = new CronJob(
  "05 * * * * *",
  async function () {
    try{
      console.log("Cron job in progress")
    const unsentNotifications = await getAllUnsentNotifications();
   
    unsentNotifications.forEach(async  (notification) => {
     
      notification.recipientEmails.forEach((recipient) => {
       
        sendNotificationMail(
          recipient,
          notification.subject,
          notification.content,
          "<h3>"+notification.content+"</h3>"
          );    
      });
      await setStatusSent(notification)
    });
    }catch(err){
      console.log(err)
    }
  },
  null,
  true,
  "Asia/Kolkata"
);

module.exports = { job };
