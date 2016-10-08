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
					addDepartments();
					break;

				default:
					console.log("Good job holmes, you broke it!");
			}
       })
}


function displaySales(){
	var table = new Table({ head: ["ID", "Department Name", "Over Head Costs", "Product Sales", "Total Profit"] });
	connection.query('SELECT * FROM Departments', function(err, res) {
	    console.log(res[0].id);

	    for (var i = 0; i < 5; i++) {
		    table.push(
			    { '#': ['Name', 'overHeadCosts','Sales', 'Profit'] }
			);
		}
		console.log(table.toString());
	});

	
	

}


function addDepartments(){
	console.log("Yo not ready yet!");
	// insert into Departments(departmentName, overHeadCosts)
	// values('Food', 3800);
}

runInterface();








