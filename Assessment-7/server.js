const express = require('express');
const { sendEmail } = require('./config/emailConfig');

const app = express();

app.post("/sendmail", (req, res) => {
    sendEmail("Week 8 Report");
    res.send("send email success");
});

const port = 4000;
app.listen(port, () => console.log('Server started on port ' + port));
