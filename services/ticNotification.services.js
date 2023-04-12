const TicketNotification = require("../models/ticketNotification.model")

const createTicNotification = async(data)=>{
 try{
    const newNotification = {
        subject:data.subject,
         recipientEmail : data.recipientEmail,
         requestor :data.requestor,
         ticketId : data.ticketId,     
      }
      const response = await TicketNotification.create(newNotification)
    return {
        result : response,
    }
 }catch(err){
    console.log(err);
    return err.message;
 }
}