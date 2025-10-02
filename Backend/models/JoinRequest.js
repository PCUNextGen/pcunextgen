// models/JoinRequest.js - Model for join request operations
const { executeQuery } = require('../config/database');

class JoinRequest {
  // Create a new join request
  static async create(joinData) {
    const {
      name,
      email,
      interest,
      message,
      consent = true
    } = joinData;

    const sql = `
      INSERT INTO join_requests (
        name, email, interest, message, consent
      ) VALUES (?, ?, ?, ?, ?)
    `;

    const params = [
      name, email, interest, message, consent
    ];

    return await executeQuery(sql, params);
  }

  // Get all join requests
  static async getAll() {
    const sql = `
      SELECT * FROM join_requests 
      ORDER BY created_at DESC
    `;
    return await executeQuery(sql);
  }

  // Get join request by ID
  static async getById(id) {
    const sql = `
      SELECT * FROM join_requests 
      WHERE id = ?
    `;
    return await executeQuery(sql, [id]);
  }

  // Get join requests by status
  static async getByStatus(status) {
    const sql = `
      SELECT * FROM join_requests 
      WHERE status = ?
      ORDER BY created_at DESC
    `;
    return await executeQuery(sql, [status]);
  }

  // Update join request status
  static async updateStatus(id, status) {
    const sql = `
      UPDATE join_requests 
      SET status = ?, updated_at = CURRENT_TIMESTAMP
      WHERE id = ?
    `;
    return await executeQuery(sql, [status, id]);
  }

  // Check if email already exists
  static async emailExists(email) {
    const sql = `
      SELECT id FROM join_requests 
      WHERE email = ?
    `;
    const result = await executeQuery(sql, [email]);
    return result.success && result.data.length > 0;
  }

  // Delete join request (admin only)
  static async delete(id) {
    const sql = `
      DELETE FROM join_requests 
      WHERE id = ?
    `;
    return await executeQuery(sql, [id]);
  }

  // Get statistics
  static async getStats() {
    const sql = `
      SELECT 
        COUNT(*) as total,
        SUM(CASE WHEN status = 'pending' THEN 1 ELSE 0 END) as pending,
        SUM(CASE WHEN status = 'approved' THEN 1 ELSE 0 END) as approved,
        SUM(CASE WHEN status = 'rejected' THEN 1 ELSE 0 END) as rejected
      FROM join_requests
    `;
    return await executeQuery(sql);
  }

  // Get interest statistics
  static async getInterestStats() {
    const sql = `
      SELECT 
        interest,
        COUNT(*) as count,
        ROUND((COUNT(*) * 100.0 / (SELECT COUNT(*) FROM join_requests)), 2) as percentage
      FROM join_requests 
      GROUP BY interest
      ORDER BY count DESC
    `;
    return await executeQuery(sql);
  }
}

module.exports = JoinRequest;
