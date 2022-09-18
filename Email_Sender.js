// NOT WORKING IDK WHATS WRONG


var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'outlook',
  auth: {
    user: 'jacobrawefi122@outlook.com',
    pass: '$$$'
  }
});

var mailOptions = {
  from: 'jacobrawefi122@outlook.com',
  to: 'jacobrawefi122@outlook.com',
  subject: 'Email sending test',
  text: 'Hey this just a test!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});


// NOT WORKING IDK WHATS WRONG