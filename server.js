
const bodyParser = require('body-parser');
const express = require("express");
const app = express();
const sendEmail = require('./utils/sendEmail');


app.use(bodyParser.json());
app.use(express.urlencoded({extended:false}));

console.log("Starting server.js")
console.log("view engine set")
console.log("Rendered to index")

app.post("/sendemail", (req, res) => {
    console.log(req.body)
    const{name, email, subject, message} = req.body.post;
    console.log(name+" "+email+" "+subject+" "+message)
    const from = "gopujkarsiddhid10@gmail.com";
    const to = "hemangjani1111@gmail.com";
    const subjec = "New contact request";

    const output = `
        <h3>Contact Details</h3>
        <ul>
            <li>Name: ${name}</li>
            <li>Email: ${email}</li>
            <li>Subject: ${subject}</li>
            <li>Message: ${message}</li>
        </ul>
    `;

    sendEmail(to,from,subjec,output)
})
console.log("app.post execution finished")

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started`));