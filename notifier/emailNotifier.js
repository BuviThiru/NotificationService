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

const sendNotificationMail = ()=>{ 
    console.log(EMAIL_ADD)
const message = {
    from : EMAIL_ADD,
    to : [EMAIL_ADD],
    subject : "second check",
    text : "text",
    html : "<h1>Hai welcome</h1>"
};
console.log(">>>>>>>>>>>>>>>>",message)
trasporter.sendMail(message,(err,info)=>{
    if(err){
        console.log(err);
    }else {
        console.log("Info",info);
    }
})
};

module.exports = {sendNotificationMail};