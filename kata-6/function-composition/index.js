// Function composition is a mathematical operation that mainly presents itself in lambda calculus
// and computability. It is explained well here, but this is my explanation, in simple mathematical notation:
//
// f3 = compose( f1 f2 )
//    Is equivalent to...
// f3(a) = f1( f2( a ) )
// Your task is to create a compose function to carry out this task, which will be passed two functions or lambdas.
// Ruby functions will be passed, and should return, either a proc or a lambda. Remember that the resulting
// composed function may be passed multiple arguments!
//
// compose(f , g)(x)
// => f( g( x ) )

// see this article on function composition: https://medium.com/@dtipson/creating-an-es6ish-compose-in-javascript-ac580b95104a

function compose(f,g) {
    return function(...a) {
        return f(g(...a));
    }
}

// refactor
// var compose = (f,g) => (...args) => f(g(...args));

// alternate solution - more variable
// const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));

// We’re building up a function, so the reducing function can just return a function each time.
// And since this is a composition (joining up functions), we can probably ignore the empty case
// (the oddball case of compose() when there are no functions to join: though if we wanted,
// we could just default to returning x=>x for that empty case). Since Array.reduce is
// comfortable with that (simply passing the first item as the accumulator), it works.

module.exports = compose;