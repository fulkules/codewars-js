// Color Ghost
// Create a class Ghost
//
// Ghost objects are instantiated without any arguments.
//
//     Ghost objects are given a random color attribute of
//     "white" or "yellow" or "purple" or "red" when instantiated
//
// ghost = new Ghost();
// ghost.color //=> "white" or "yellow" or "purple" or "red"



// class Ghost {
//     constructor() {
//         this.color = [`red`, `yellow`, `purple`, `white`][Math.random() * 4 ^ 0];
//     }
// }

// this challenge is not very clear -- and not sure how to get a test to work for it.

var Ghost = function() {
    this.color = ["white","yellow","purple","red"][Math.floor(Math.random() * 4)];
};

module.exports = Ghost;

