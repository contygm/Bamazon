var Table = require('cli-table');
var mysql = require("mysql");
var inquirer = require('inquirer');

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: 'root',
	password: '',
	database: 'Bamazon'
});

var table = new Table({ head: ["Department ID", "Department Name", "Over Head Costs", "Product Sales", "Total Profit"] });
 
table.push(
    { 'id#': ['Name', 'overHeadCosts','Sales', 'Profit'] }
  , { 'id#': ['Name', 'overHeadCosts','Sales', 'Profit'] }
);
 
console.log(table.toString());

// Running this application will list a set of menu options:
	// View Product Sales by Department
	// Create New Department
// When an executive selects View Product Sales by Department, 
	//display a summarized table in their terminal

// TotalProfit calculated on the fly 
	//= OverheadCosts - ProductSales. 
	//should not be stored in any database. 
	//use a custom alias.

// Add new department with overhead costs
// insert into Departments(departmentName, overHeadCosts)
// values('Food', 3800);