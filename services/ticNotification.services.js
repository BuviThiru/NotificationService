const TicketNotification = require("../models/ticketNotification.model");
const { sendNotificationMail } = require("../notifier/emailNotifier");

const createTicNotificationSer = async(data)=>{
 try{
    const newNotification = {
         subject:data.subject,
         content:data.content,
         recipientEmail : data.recipientEmail,
         requestor :data.requestor,
         ticketId : data.ticketId,     
      }

      const response = await TicketNotification.create(newNotification);
      newNotification.recipientEmail.forEach((recipient)=>{
        sendNotificationMail(recipient,newNotification.subject,newNotification.content,"<h3>Thank You</h3>")
      })
    return {
        result : response,
    }
 }catch(err){
    console.log(err);
    return err.message;
 }
}
const getAllUnsentNotifications = async() =>{
   try{
       const unsentNotifications = await TicketNotification.find({
           sentStatus: "UNSENT"
       });
       return unsentNotifications;
   }
   catch(err){
       console.log(err.message);
       return err.message;
   }
}

const setStatusSent = async(notification) =>{
   try{
       const update = notification;
       update.sentStatus = "SENT";
       await TicketNotification.updateOne({_id: notification._id}, update);
   }
   catch(err){
       console.log(err.message);
       return err.message;
   }
}


module.exports = {createTicNotificationSer,getAllUnsentNotifications,setStatusSent}