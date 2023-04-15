const nodemailer = require('nodemailer');
const {EMAIL_ADD,EMAIL_PASSWORD,EMAIL_HOST} = require('../config/email.config');

const trasporter = nodemailer.createTransport({
    pool : true,
    host: EMAIL_HOST,
    Port : 465, //here it stays connected to smtp server
    secure:true,
    auth: {
        user: EMAIL_ADD,
        pass :EMAIL_PASSWORD,
    }
});


const message = {
    from : EMAIL_ADD,
    to : EMAIL_ADD,
    subject : "Message Title",
    text : "Plaintext Version of the message",
    html : "<p>HTML version of the message<p>"
}

trasporter.sendMail(message,(err,info)=>{
    if(err){
        console.log(err)
    }else {
        console.log("Info",info)
    }
})