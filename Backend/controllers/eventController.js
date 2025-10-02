// controllers/eventController.js
const EventRegistration = require('../models/EventRegistration');

exports.register = async (req, res) => {
  try {
    const result = await EventRegistration.register(req.body);
    if (result.success) {
      res.status(201).json({ success: true, message: 'Registration successful', data: result.data });
    } else {
      res.status(400).json({ success: false, message: 'Registration failed', error: result.error });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
};
