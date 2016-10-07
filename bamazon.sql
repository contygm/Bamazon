CREATE DATABASE Bamazon;

USE Bamazon;

CREATE TABLE Products(
	id INTEGER(11) AUTO_INCREMENT NOT NULL,
	productName VARCHAR(50) NULL,
    departmentName VARCHAR(50) NULL,
	price DECIMAL(10,2) NULL,
	stockQuantity INTEGER(11) NULL,
	primary key(id)
);

INSERT INTO Products(productName, departmentName, price, stockQuantity) 
VALUES ('Fountain Pen','Office Supplies', 2.27, 35);
-- 
-- INSERT INTO Products(productName, departmentName, price, stockQuantity) 
-- VALUES ('Highlighters 4-Pack','Office Supplies', 5.25, 50);
-- 
-- INSERT INTO Products(productName, departmentName, price, stockQuantity) 
-- VALUES ('Stapler','Office Supplies', 1.50, 45);
-- 
-- INSERT INTO Products(productName, departmentName, price, stockQuantity) 
-- VALUES ('Daily Planner','Office Supplies', 10.11, 38);
-- 
-- INSERT INTO Products(productName, departmentName, price, stockQuantity) 
-- VALUES ('Soccer Ball','Sports', 7.76, 75);
-- 
-- INSERT INTO Products(productName, departmentName, price, stockQuantity) 
-- VALUES ('Baseball','Sports', 3.45, 32);
-- 
-- INSERT INTO Products(productName, departmentName, price, stockQuantity) 
-- VALUES ('Cones','Sports', 1.25, 100);
-- 
-- INSERT INTO Products(productName, departmentName, price, stockQuantity) 
-- VALUES ('Cat Litter','Pet Supplies', 6.27, 42);
-- 
-- INSERT INTO Products(productName, departmentName, price, stockQuantity) 
-- VALUES ('Dog Food','Pet Supplies',13.57, 15);
-- 
-- INSERT INTO Products(productName, departmentName, price, stockQuantity) 
-- VALUES ('Flea Shampoo','Pet Supplies', 8.28, 7);

SELECT * FROM Produts;