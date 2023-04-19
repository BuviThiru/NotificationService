const nodemailer = require('nodemailer');
const {EMAIL_ADD,EMAIL_PASSWORD} = require('../config/email.config')

const trasporter = nodemailer.createTransport({
    service: 'gmail',
    pool : true,
    host: "smtp.gmail.host",
    Port : 465, //here it stays connected to smtp server
    secure:false,
    auth: {
        user: EMAIL_ADD,
        pass :EMAIL_PASSWORD,
    }
});

const sendNotificationMail = (to,subject,text,html)=>{  
     
const message = {
    from : EMAIL_ADD,
    to : to,
    subject : subject,
    text : text,
    html :html
};
console.log("message",message) 
trasporter.sendMail(message,(err,info)=>{
    if(err){
        console.log(err);
    }else {
        console.log("Info",info);
    }
})
};

module.exports = {sendNotificationMail};