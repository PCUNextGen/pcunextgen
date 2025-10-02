// config/database.js - Database Configuration for NextGen Club
const mysql = require('mysql2/promise');

// Database configuration
const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 3306,
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'nextgen_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
};

// In-memory storage for development (when MySQL is not available)
let inMemoryStorage = [];
let nextId = 1;

// Create connection pool
let pool;
let useInMemory = false;

try {
  pool = mysql.createPool(dbConfig);
} catch (error) {
  console.warn('MySQL not available, using in-memory storage for development');
  useInMemory = true;
}

// Test database connection
const testConnection = async () => {
  if (useInMemory) {
    console.log('✅ Using in-memory storage (development mode)');
    return true;
  }

  try {
    const connection = await pool.getConnection();
    console.log('✅ Database connected successfully!');
    connection.release();
    return true;
  } catch (error) {
    console.warn('❌ Database connection failed, switching to in-memory storage:', error.message);
    useInMemory = true;
    return true; // Continue with in-memory storage
  }
};

// Execute query helper function
const executeQuery = async (sql, params = []) => {
  if (useInMemory) {
    return executeInMemoryQuery(sql, params);
  }

  try {
    const [results] = await pool.execute(sql, params);
    return { success: true, data: results };
  } catch (error) {
    console.error('Database query error:', error);
    return { success: false, error: error.message };
  }
};

// In-memory query execution for development
const executeInMemoryQuery = (sql, params = []) => {
  try {
    const sqlLower = sql.toLowerCase().trim();

    if (sqlLower.startsWith('insert')) {
      // Extract values and create a new record
      const record = {
        id: nextId++,
        name: params[0],
        email: params[1],
        interest: params[2],
        message: params[3],
        consent: params[4],
        status: 'pending',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      };
      inMemoryStorage.push(record);
      return { success: true, data: { insertId: record.id } };

    } else if (sqlLower.startsWith('select')) {
      if (sqlLower.includes('count(*)')) {
        // Stats query
        const total = inMemoryStorage.length;
        const pending = inMemoryStorage.filter(r => r.status === 'pending').length;
        const approved = inMemoryStorage.filter(r => r.status === 'approved').length;
        const rejected = inMemoryStorage.filter(r => r.status === 'rejected').length;
        
        if (sqlLower.includes('group by interest')) {
          // Interest stats
          const interests = {};
          inMemoryStorage.forEach(record => {
            interests[record.interest] = (interests[record.interest] || 0) + 1;
          });
          
          const results = Object.entries(interests).map(([interest, count]) => ({
            interest,
            count,
            percentage: total > 0 ? ((count / total) * 100).toFixed(2) : 0
          }));
          
          return { success: true, data: results };
        } else {
          return { success: true, data: [{ total, pending, approved, rejected }] };
        }
      } else if (params.length > 0) {
        // Get by ID
        const record = inMemoryStorage.find(r => r.id == params[0]);
        return { success: true, data: record ? [record] : [] };
      } else {
        // Get all
        return { success: true, data: inMemoryStorage };
      }

    } else if (sqlLower.startsWith('update')) {
      // Update status
      const id = params[1];
      const status = params[0];
      const record = inMemoryStorage.find(r => r.id == id);
      if (record) {
        record.status = status;
        record.updated_at = new Date().toISOString();
        return { success: true, data: { affectedRows: 1 } };
      }
      return { success: true, data: { affectedRows: 0 } };
    }

    return { success: true, data: [] };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

module.exports = {
  pool,
  testConnection,
  executeQuery
};
