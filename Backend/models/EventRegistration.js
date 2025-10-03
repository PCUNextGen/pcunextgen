// models/EventRegistration.js
const { executeQuery } = require('../config/database');

class EventRegistration {
  static async register(data) {
    const {
      name,
      email,
      event,
      message = null
    } = data;
    
    const sql = `
      INSERT INTO event_registrations (
        name, email, event, message, created_at
      ) VALUES (?, ?, ?, ?, NOW())
    `;
    const params = [name, email, event, message];
    return await executeQuery(sql, params);
  }
}

module.exports = EventRegistration;
