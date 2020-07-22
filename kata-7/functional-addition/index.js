// Create a function add(n)/Add(n) which returns a function that always adds n to any number
//
// Note for Java: the return type and methods have not been provided to make it a bit more challenging.
// Poor explanation -- ***HINT*** they are looking for function currying here

//     var addOne = add(1);
// addOne(3); // 4
//
// var addThree = add(3);
// addThree(3); // 6


// fn(int) => int
// return a function that adds n to any number


function add(n){
    return function (m){
        return m + n;
    }
}

// short refactor
// const add = n => m => m + n;

module.exports = add;