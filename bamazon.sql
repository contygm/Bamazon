CREATE DATABASE Bamazon;

-- USE Bamazon;

CREATE TABLE Products(
	id INTEGER(11) AUTO_INCREMENT NOT NULL,
	productName VARCHAR(50) NULL,
    departmentName VARCHAR(50) NULL,
	price DECIMAL(10,2) NULL,
	stockQuantity INTEGER(11) NULL,
	primary key(id)
);

-- SELECT * FROM Products;

-- USE Bamazon;

CREATE TABLE Departments(
	id INTEGER(11) AUTO_INCREMENT NOT NULL,
    departmentName VARCHAR(50) NULL,
	overHeadCosts DECIMAL(10,2) NULL,
	totalSales DECIMAL(10,2) NULL,
	primary key(id)
);


USE Bamazon;

UPDATE Departments SET totalSales = 2 WHERE id=5;
UPDATE Departments SET totalSales = 2 WHERE id=6;

SELECT * FROM Departments;
SELECT * FROM Products;