const { Pool } = require('pg');

// Create a new pool instance
const pool = new Pool({
  user: 'trianhvo',
  password: '123',
  host: 'localhost',
  port: '5432',
  database: 'postgres',
});

module.exports = pool;