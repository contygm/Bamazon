// list of options
	// View Products for Sale
		// list all available item IDs, names, prices, and quantities
	// View Low Inventory
		// list everything with less than 5 stockQuantity
	// Add to Inventory
		// prompt to add more of any item
	// Add New Product
		// can add totall new products


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

    console.log("connection locked");
})

function pickProcess(){
	inquirer.prompt([{
           name: "chosenProcess",
           type: "list",
           message: "What do you need to do?",
           choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product"]
       }]).then(function(answers)){
			switch(answers.chosenProcess){
				case 'View Products for Sale':
					displayStock();
					break;

				case 'View Low Inventory':
					lowStock();
					break;

				case 'Add to Inventory':
					addStock();
					break;

				case 'Add New Product':
					newProduct();
					break;

				default:
					console.log("Good job holmes, you broke it!");
			}
	};
}

function displayStock(){
	connection.query('SELECT * FROM Products', function(err, res) {
	    for (var i = 0; i < res.length; i++) {
	        console.log(res[i].id + " | " + res[i].productName + " | " + res[i].price + " | " + res[i].quantities);
	    }

    	console.log("-----------------------------------");
	});

};

function lowStock(){
	connection.query('SELECT * FROM Products WHERE stockQuantity <= 5', function(err, res) {
		    for (var i = 0; i < res.length; i++) {
		        console.log(res[i].id + " | " + res[i].productName + " | " + res[i].price + " | " + res[i].quantities);
		    }

	    	console.log("-----------------------------------");
	});
}

// adds to stockQuantity
function addStock(){
	inquirer.prompt([{
           name: "id",
           message: "What's the product id?"
       }, {
           name: "quantity",
           message: "How many would you like to add?"
       }]).then(function(answers){
       		var query = 'UPDATE Products SET stockQuantity=? WHERE id=?'; 
       		//, function(err, res) {}
       		connection.query(query, [answers.quantity, answers.id]);	
       });
}

// adds whole new item
function newProduct{
	
	inquirer.prompt([{
       name: "productName",
       message: "What's the product's name?"
   }, {
       name: "departmentName",
       message: "What department is the product in?"
   }, {
       name: "price",
       message: "What's the product's per item price?"
   }, {
       name: "stockQuantity",
       message: "How many would you to add?"
   }]).then(function(answers){   		
   		var query = "INSERT INTO Products(productName, departmentName, price, stockQuantity)"; 
		query += "VALUES (?,?,?,?)";
		//, function(err, res) {}
   		connection.query(query,[answers.productName, answers.departmentName, answers.price, answers.stockQuantity]);	
   });
	
}

