var mysql = require("mysql");

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
})


// display inventory with id, names, prices

// using prompt npm, promt two messages
// ask for ID
// ask for how many they want

// check for sufficent inventory
	// fill order (stockQuantity--)
	// show total cost of purchase
// else "Insifficient quantity"

