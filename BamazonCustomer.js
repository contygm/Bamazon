
var mysql = require("mysql");
var prompt = require('prompt');

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
	prompt.start();    

    prompt.get([{
       name: "ID",
       message: "What's the product id for your item?",
       type: 'integer',
       required: true
   	}, {
       name: "quantity",
       message: "How many would you like?",
       type: 'integer',
       required: true
   	}], function(err, answers){
       		connection.query('SELECT * FROM Products WHERE id=?', [answers.ID], function(err, res){
   
       			if(answers.quantity <= res[0].stockQuantity){
       				
       				// update stock numns in products db
       				var updatedQuantity = res[0].stockQuantity - answers.quantity;	       		
       				connection.query('UPDATE Products SET stockQuantity=? WHERE id=?', [updatedQuantity, answers.ID], function(err, result) {});
       				var total = answers.quantity * res[0].price;
       				console.log("That'll be: $" + total.toFixed(2));

       				// add revenue to totalSales in departments DB
       				var query = 'SELECT * FROM Departments WHERE departmentName = ?';
					connection.query(query, [res[0].departmentName], function(err, result) { 
						var query1 = 'UPDATE Departments SET totalSales = totalSales + ? WHERE id = ?';

						connection.query(query1, [total, result[0].id], function(err, result) {});
					});

       				goAgain();

       			} else {
       				console.log("Sorry, we don't have enough of" + res.productName + "fill that order!")
       				goAgain();
       			}
  			})
   			
		})
}

function goAgain(){
	prompt.start();

	prompt.get([{
       name: "again",
       message: "(y/n) Would you like to pick a another item (or try a different quantity)?",
       required: true
   }], function(err, answers) {
   		if (answers.again == 'y' || answers.again == 'Y'){
   			buyItem()
			} else {
				console.log("Have a great day.");
				process.exit();
			}
		})
}


