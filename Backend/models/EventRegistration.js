// models/EventRegistration.js
const { executeQuery } = require('../config/database');

class EventRegistration {
  static async register(data) {
    const {
      event_id,
      user_id,
      attendance_status = 'registered',
      feedback_rating = null,
      feedback_comment = null,
      payment_status = 'pending'
    } = data;
    const sql = `
      INSERT INTO event_registrations (
        event_id, user_id, attendance_status, feedback_rating, feedback_comment, payment_status
      ) VALUES (?, ?, ?, ?, ?, ?)
    `;
    const params = [event_id, user_id, attendance_status, feedback_rating, feedback_comment, payment_status];
    return await executeQuery(sql, params);
  }
}

module.exports = EventRegistration;
