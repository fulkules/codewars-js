// Given a non-negative integer, return an array / a
// list of the individual digits in order.
//
//     Examples:
//
// 123 => [1,2,3]
//
// 1 => [1]
//
// 8675309 => [8,6,7,5,3,0,9]

// fn(num) => array
// convert num to string
// split the string
// iterate the chars and push into new array (will need to coerce str back to num)
// return the array

function digitize(n){
    let arr = [];
    let numStr = n.toString();
    for(let i = 0; i < numStr.length; i++){
        arr.push(+numStr.charAt(i));
    }
    return arr;
}

// shorthand syntax solution and best practicd
// const digitize = n => n.toString().split('').map(Number);

// other good solution
// const digitize = n => Array.from(String(n), e => Number(e));

module.exports = digitize;