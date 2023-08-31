-- Write your Schema Here -- 
DROP DATABASE IF EXISTS store_db;
CREATE DATABASE store_db;

USE store_db;

CREATE TABLE customers (
    id INT NOT NULL,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    PRIMARY KEY (id)
);

CREATE TABLE customers_order (
    id INT NOT NULL,
    customer_id INT,
    order_details TEXT,
    FOREIGN KEY (customer_id)
    REFERENCES customers(id)
    ON DELETE SET NULL
);