// My grandfather always predicted how old people would get,
//     and right before he passed away he revealed his secret!
//
//     In honor of my grandfather's memory we will write a function using his formula!
//
// Take a list of ages when each of your great-grandparent died.
//     Multiply each number by itself.
//     Add them all together.
//     Take the square root of the result.
//     Divide by two.

// fn(num..num) => num
//  convert the args into an array of args
//  iterate the array
    // multiply each arg by itself
//  iterate these totals and get the sum
//  divide this by two


function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
    let sum = [...arguments]
        .map( x => x ** 2 )
        .reduce( (sum,v) => sum + v, 0 );
    return Math.floor( Math.sqrt(sum) / 2 );
}

// refactor
// function predictAge(...ages){
//     return Math.floor(
//         Math.sqrt(
//             ages.map( age => age * age )
//                 .reduce( (total, age) => total + age, 0 )
//         ) / 2
//     );
// }

// using Math.hypot
// const predictAge = (...ages) => Math.hypot(...ages) / 2 | 0;

// if not allowed to modify function signature


module.exports = predictAge;