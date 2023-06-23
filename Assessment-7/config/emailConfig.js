require('dotenv').config();
const nodemailer = require('nodemailer');
const ejs = require('ejs');

const transport = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PWD
  }
});

const sendEmail = (subject) => {
    ejs.renderFile(__dirname + '/body.ejs', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const mailOptions = {
          from: process.env.EMAIL_USER,
          to: process.env.EMAIL_RECEIVER,
          subject: subject,
          html: data,
          attachments: [
            {
              filename: 'Emmanuel Kariithi WEEK 8 REPORT.docx',
              path: './Emmanuel-Kariithi-WEEK-8-REPORT.docx',
              cid: 'REPORT'
            }
          ]
        };
  
        transport.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.log(error);
          } else {
            console.log('Message sent: %s', info.messageId);
          }
        });
      }
    });
};

module.exports = {
    sendEmail
};
