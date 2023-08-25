-- Write code here or enter directly in MySQL shell --

-- drop databases --
DROP DATABASE IF EXISTS sample_db;
DROP DATABASE IF EXISTS books_db;

CREATE DATABASE books_db;

-- Use books_db --
USE books_db;

-- See database in use --
SELECT DATABASE();
