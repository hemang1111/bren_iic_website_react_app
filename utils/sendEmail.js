require("dotenv").config();
const sgmail = require('@sendgrid/mail');
sgmail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = (to, from, subject, text) => {
    const msg = {
        to,
        from,
        subject,
        html: text,
    };

    sgmail.send(msg, function(err, info){
        console.log("msg is "+msg.to)
        if(err){
            console.log(err)
            console.log("Email not sent")
        }
        else{
            console.log("Email sent success")
        }
    });
};

module.exports = sendEmail;