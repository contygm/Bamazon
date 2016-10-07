var mysql = require("mysql");
var inquirer = require('inquirer');

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: 'root',
	password: '',
	database: 'Bamazon'
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    displayStock();


})

function displayStock(){
	connection.query('SELECT * FROM Products', function(err, res) {
	    for (var i = 0; i < res.length; i++) {
	        console.log(res[i].id + " | " + res[i].productName + " | " + res[i].price);
	    }

    	console.log("-----------------------------------");
	});
};

// using prompt npm, promt two messages
// ask for ID
// ask for how many they want

function VAR## (){
    inquirer.prompt([{
           name: "ID",
           message: "What's the product id for your item?"
       }, {
           name: "quantity",
           message: "How many would you like?"
       }]).then(function(answers){

		       	connection.query('SELECT * FROM Top5000 WHERE artist=?', [answers.artist], function(err, res) {
				    for (var i = 0; i < res.length; i++) {
				        console.log(res[i])
				        // console.log(res[i].position + " | " + res[i].artist + " | " + res[i].song + " | " + res[i].release + " | " + res[i].1rating + " | " + res[i].2rating + " | " + res[i].3rating + " | " + res[i].4rating + " | " + res[i].5rating);
				    }
				})
	  		})
}


// check for sufficent inventory
	// fill order (stockQuantity--)
	// show total cost of purchase
// else "Insifficient quantity"

