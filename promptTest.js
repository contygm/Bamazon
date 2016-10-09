var prompt = require('prompt');

//
// Start the prompt
//
prompt.start();

// var property = {
//   name: 'yesno',
//   message: 'are you sure?',
//   validator: /y[es]*|n[o]?/,
//   warning: 'Must respond yes or no',
//   default: 'no'
// };

// //
// // Get the simple yes or no property
// //
// prompt.get(property, function (err, result) {
//   //
//   // Log the results.
//   //
//   console.log('Command-line input received:');
//   console.log('  result: ' + result.yesno);
// });

var properties = {
  properties: {
    animal: {
      description: 'Enter an animal',
      default: 'dog',
      pchoices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product"]
    },
    sound: {
      description: 'What sound does this animal make?',
      conform: function (value) {
        var animal = prompt.history(0).value;

        return animal === 'dog' && value === 'woof'
          || animal === 'cat' && value === 'meow';
      }
    }
  }
}

//
// Get two properties from the user
//
prompt.get(properties, function (err, result) {
  //
  // Log the results.
  //
  console.log('Command-line input received:');
  console.log('  animal: ' + result.animal);
  console.log('  sound: ' + result.sound);
});