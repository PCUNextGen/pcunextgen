// controllers/eventController.js

const EventRegistration = require('../models/EventRegistration');
const nodemailer = require('nodemailer');

exports.register = async (req, res) => {
  try {
    const result = await EventRegistration.register(req.body);
    if (result.success) {
      // Send response email
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'yourclubemail@gmail.com', // Replace with your club email
          pass: 'your-app-password'        // Replace with your Gmail app password
        }
      });

      const mailOptions = {
        from: 'yourclubemail@gmail.com',
        to: req.body.email,
        subject: 'Thank you for registering!',
        text: `Hi ${req.body.name},\n\nThank you for registering for our event! We have received your details.\n\n- NextGen Innovators Club`
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Error sending response email:', error);
        } else {
          console.log('Response email sent:', info.response);
        }
      });

      res.status(201).json({ success: true, message: 'Registration successful', data: result.data });
    } else {
      res.status(400).json({ success: false, message: 'Registration failed', error: result.error });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
};
