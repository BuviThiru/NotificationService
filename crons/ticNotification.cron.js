const {getAllUnsentNotifications, setStatusSent} = require('../services/ticNotification.services')
const { sendNotificationMail } = require("../notifier/emailNotifier");

var CronJob = require("cron").CronJob;
var job = new CronJob(
  "05 * * * * *",
  async function () {
    console.log("Cron job in progress")
    const unsentNotifications = await getAllUnsentNotifications();
    console.log("??????????????????????????",unsentNotifications)
    unsentNotifications.forEach(async  (notification) => {
      console.log(notification.recipientEmails)
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
  },
  null,
  true,
  "Asia/Kolkata"
);

module.exports = { job };
