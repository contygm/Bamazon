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

// var table = new Table({ head: ["Department ID", "Department Name", "Over Head Costs", "Product Sales", "Total Profit"] });
 
// table.push(
//     { 'id#': ['Name', 'overHeadCosts','Sales', 'Profit'] }
//   , { 'id#': ['Name', 'overHeadCosts','Sales', 'Profit'] }
// );
 
// console.log(table.toString());


// Running this application will list a set of menu options:
	// View Product Sales by Department
		//display a summarized table in their terminal
		// TotalProfit calculated on the fly 
			//= OverheadCosts - ProductSales. 
			//should not be stored in any database. 
			//use a custom alias.
	// Create New Department
		// insert into Departments(departmentName, overHeadCosts)
		// values('Food', 3800);
	

function runInterface(){
	inquirer.prompt([{
           name: "process",
           type: "list",
           message: "What do you need to do?",
           choices: ["View Product Sales by Department", "Create New Department"]
       }]).then(function(answers){
       		switch(answers.process){
       			case 'View Product Sales by Department':
					displaySales();
					break;

				case 'Create New Department':
					addDepartment();
					break;

				default:
					console.log("Good job holmes, you broke it!");
			}
       })
}

function displaySales(){

}

function addDepartments(){
	
}





