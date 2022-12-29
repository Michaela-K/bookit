-- Drop and recreate Users table (Example)
-- CREATE DATABASE bookit;
-- \c bookit
-- \d bookit ? - is for what output?
-- \i db/schema/tables.sql

DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS events CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE events (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  title VARCHAR(255),
  location VARCHAR(255),
  startdate VARCHAR(255),
  enddate VARCHAR(255),
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  thumbnail VARCHAR(255)
);