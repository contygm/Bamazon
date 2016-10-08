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
	    for (var i = 0; i < res.length; i++) {
		    var profit = res[i].overHeadCosts - res[i].totalSales;
		    table.push(
			    [res[i].id, res[i].departmentName, res[i].overHeadCosts,res[i].totalSales, profit]
			);
		}
		console.log(table.toString());
		goAgain();
	});

}

function addDepartments(){
	
	inquirer.prompt([{
	           name: "name",
	           message: "What's the new department's name?"
	       },{
	           name: "cost",
	           message: "What's the overhead cost?"
	       }]).then(function(answers){
	       		var query = "INSERT INTO Departments(departmentName, overHeadCosts, totalSales)";
				query += "VALUES(?,?,0)";
	       		connection.query(query, [answers.name, answers.cost], function(err,res){});
	       		goAgain();
	       });
	
}

function goAgain(){
	inquirer.prompt([{
       name: "again",
       message: "Would you like to do something else?",
       type: 'confirm'
   }]).then (function(answers) {
   		if (answers.again){
   			runInterface();
			} else {
				console.log("Have a great day.");
				process.exit();
			}
		})
}

runInterface();








