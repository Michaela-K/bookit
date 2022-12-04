-- Drop and recreate Users table (Example)
-- CREATE DATABASE interest;
-- \c interest
-- \d interest ? - is for what output?
-- \i db/schema/01_schema.sql

DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);