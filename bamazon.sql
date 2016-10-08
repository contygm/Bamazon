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

CREATE TABLE Departments(
	id INTEGER(11) AUTO_INCREMENT NOT NULL,
	productName VARCHAR(50) NULL,
    departmentName VARCHAR(50) NULL,
	price DECIMAL(10,2) NULL,
	stockQuantity INTEGER(11) NULL,
	primary key(id)
);

SELECT * FROM Products;