-- drops database called books_db if exits
DROP DATABASE IF EXISTS books_db;
-- creates databse books_db
CREATE DATABASE books_db;

USE books_db;

-- create tables called biographies
CREATE TABLE biographies (
  -- integer can't be null
  id INT NOT NULL,
  -- name can't be null or over 100 characters.
  name VARCHAR(100) NOT NULL
);

