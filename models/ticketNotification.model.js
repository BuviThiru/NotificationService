const mongoose = require('mongoose')

const ticketNotification = new mongoose.Schema({
     subject:{
        type:String,
        required : true,
        minLength :5,
        maxLength :50,
     },
     content :{
        type : String,
        required: true
     },
     recipientEmail :{
        type : [String],
        required: true
     },
     sentStatus :{
        type:String,
        required :true,
        default :"Unsent"
     } ,
     requestor :{
        type: String,
        required : true
     },
     ticketId :{
        required :true,
        type:String
     },
     createAt :{
        type:Date,
        immutable:true,
        default:Date.now,
     },
     updatedAT :{
        type:Date,
        default:Date.now,
     }
})


module.exports = mongoose.model("TicketNotification" , ticketNotification)