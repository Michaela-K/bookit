-- Drop and recreate Users table (Example)
-- CREATE DATABASE bookit;
-- \c bookit
-- \d bookit ? - is for what output?
-- \i db/schema/tables.sql


DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS events CASCADE;
DROP TABLE IF EXISTS attendees CASCADE;

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
  start TIMESTAMP, -- Change the data type to TIMESTAMP
  enddate TIMESTAMP, -- Change the data type to TIMESTAMP
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  thumbnail VARCHAR(255),
  CONSTRAINT check_dates_within_current_month CHECK (
    EXTRACT(YEAR FROM start) = EXTRACT(YEAR FROM CURRENT_DATE)
    AND EXTRACT(MONTH FROM start) = EXTRACT(MONTH FROM CURRENT_DATE)
    AND EXTRACT(YEAR FROM enddate) = EXTRACT(YEAR FROM CURRENT_DATE)
    AND EXTRACT(MONTH FROM enddate) = EXTRACT(MONTH FROM CURRENT_DATE)
  )
);

CREATE TABLE attendees (
  id SERIAL PRIMARY KEY,
  event_id INTEGER REFERENCES events(id) ON DELETE CASCADE,
  user_name VARCHAR(255),
  email VARCHAR(255)
);