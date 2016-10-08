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

// instantiate 
var table1 = new Table({
    head: ['TH 1 label', 'TH 2 label']
  , colWidths: [100, 200]
});
 
// table is an Array, so you can `push`, `unshift`, `splice` and friends 
table1.push(
    ['First value', 'Second value']
  , ['First value', 'Second value']
);

console.log(table1.toString());

console.log("----------------1-------------------");

var table2 = new Table();
 
table2.push(
    { 'Some key': 'Some value' }
  , { 'Another key': 'Another value' }
);
 
console.log(table2.toString());

console.log("-----------------2------------------");

var table3 = new Table({ head: ["", "Top Header 1", "Top Header 2"] });
 
table3.push(
    { 'Left Header 1': ['Value Row 1 Col 1', 'Value Row 1 Col 2'] }
  , { 'Left Header 2': ['Value Row 2 Col 1', 'Value Row 2 Col 2'] }
);
 
console.log(table3.toString());

console.log("-----------------3------------------");
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