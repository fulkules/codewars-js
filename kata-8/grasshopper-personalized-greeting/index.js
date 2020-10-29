// Personalized greeting
// Create a function that gives a personalized greeting.
// This function takes two parameters: name and owner.
//
//     Use conditionals to return the proper message:
//
//     case	return
// name equals owner	'Hello boss'
// otherwise	'Hello guest'

// fn(str, str) => str

const greet = (name, owner) => name === owner ? 'Hello boss' : 'Hello guest';

// longer solution
// function greet (name, owner) {
//   if (name === owner) {
//     return 'Hello boss';
//   }
//   return 'Hello guest';
// }

module.exports = greet;