CREATE DATABASE Bamazon;

USE Bamazon;

CREATE TABLE Products(
	id INTEGER(11) AUTO_INCREMENT NOT NULL,
	productName VARCHAR(50) NULL,
    departmentName VARCHAR(50) NULL,
	price DECIMAL(10,2) NULL,
	stockQuanitiy INTEGER(11) NULL,
	primary key(id)
);

INSERT INTO Products(productName, departmentName, price, stockQuantity) 
VALUES ('Rhythm Ta','iKON','K-pop');

SELECT * FROM Produts;