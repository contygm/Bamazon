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

    displayStock();
})

function displayStock(){
	connection.query('SELECT * FROM Products', function(err, res) {
	    for (var i = 0; i < res.length; i++) {
	        console.log(res[i].id + " | " + res[i].productName + " | " + res[i].price);
	    }

    	console.log("-----------------------------------");
    	buyItem();
	});

};

function buyItem(){
    inquirer.prompt([{
           name: "ID",
           message: "What's the product id for your item?"
       }, {
           name: "quantity",
           message: "How many would you like?"
       }]).then(function(answers){
	       		connection.query('SELECT * FROM Products WHERE id=?', [answers.ID], function(err, res){
	   
	       			if(answers.quantity < res[0].stockQuantity){
	       				
	       				
	       				var updatedQuantity = res[0].stockQuantity - answers.quantity;
	       				console.log(updatedQuantity);

	       				connection.query('UPDATE Products SET stockQuantity=? WHERE id=?', [updatedQuantity, answers.ID], function(err, result) {});

	       				var total = answers.quantity * res[0].price;

	       				console.log("That'll be: $" + total);

	       			} else {
	       				console.log("Sorry, we don't have enough of" + res.productName + "fill that order!")
	       				inquirer.prompt([{
				           name: "again",
				           message: "Would you like to pick a different item?",
				           type: 'confirm'
				       }]).then (function(answers) {
				       		if (answers.again){
				       			buyItem()
	       					} else {
	       						console.log("Have a great day.");
	       						process.exit();
	       					}
	       				})
	       			}
	  			})
       			
			})
}



