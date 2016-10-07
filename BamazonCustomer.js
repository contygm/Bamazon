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
	       			console.log(res);
	       			if(answers.quantity < res.stockQuantity){
	       				
	       				res.stockQuantity -= answers.quantity;

	       				var total = res.stockQuantity * res.price;

	       				console.log(total);

	       			} else {
	       				console.log("Sorry, we don't have enough of" + res.productName + "fill that order!")
	       				inquirer.prompt([{
				           name: "again",
				           message: "What's the product id for your item?",
				           type: 'confirm'
				       }]).then (function(answers) {
				       		if (answers.again){
				       			buyItem()
	       					} else {
	       						console.log("Have a great day.");
	       					}
	       				})
	       			}
	  			})
       			
			})
}



