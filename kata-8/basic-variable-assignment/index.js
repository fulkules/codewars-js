// This code should store "codewa.rs" as a variable
// called name but it's not working. Can you figure out why?

// var a == "code";
// var b == "wa.rs";
// var name == a + b;



let a = "code";
let b = "wa.rs";
let name = `${a}${b}`;

// i used template string vars for the solution
// but the real solution could also just be
// to remove the double = to a single =.
// == is a comparison operator, while = is
// an assignmnt operator

// another solution
// const [a, b] = ['code', 'wa.rs']
// const name = a + b;

module.exports = name;