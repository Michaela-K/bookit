//database parameters
let dbParams = {};
if (process.env.DATABASE_URL) {
  dbParams.connectionString = process.env.DATABASE_URL;
} else {
  dbParams = {
    port: process.env.REACT_DB_PORT,
    host: process.env.REACT_DB_HOST,
    user: process.env.REACT_DB_USER,
    database: process.env.REACT_DB_NAME,
    password: process.env.REACT_DB_PASS
  };
}

// PG database client/connection setup
const { Pool } = require("pg");
const pool = new Pool(dbParams);
pool.connect();

module.exports = {dbParams, pool};