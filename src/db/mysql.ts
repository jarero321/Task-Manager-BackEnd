import mysql from 'mysql2/promise';
require('dotenv').config();

const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.USER_SQL,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
};

const pool = mysql.createPool(dbConfig);

export default pool;
