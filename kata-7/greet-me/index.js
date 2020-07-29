// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.
//
//     Example:
//
// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"

// fn(str) => str
// convert name arg to lower case
// make the first letter a capital
// build the greeting string using refactored name
// return built string

const greet = name => {
    let n = name.charAt(0).toUpperCase() + name.toLowerCase().slice(1);
    return `Hello ${n}!`;
};

// best practice
// String.prototype.formatName = function() {
//     return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
// }
//
// var greet = function(name) {
// return "Hello " + name.formatName() + "!";
// };

module.exports = greet;