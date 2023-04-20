const {getAllUnsentNotifications, setStatusSent} = require('../services/ticNotification.services')
const { sendNotificationMail } = require("../notifier/emailNotifier");

var CronJob = require("cron").CronJob;
var job = new CronJob(
  "03 * * * * *",
  async function () {
    const unsentNotifications = await getAllUnsentNotifications();
    unsentNotifications.forEach(async (notification) => {
      notification.recipientEmails.forEach((recipient) => {
        sendNotificationMail(
          recipient,
          notification.subject,
          notification.content,
          "<h3>Thank You</h3>"
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
