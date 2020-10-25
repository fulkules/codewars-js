// Your task is to create function isDivideBy (or is_divide_by)
// to check if an integer number is divisible by each out of two arguments.
//
//     A few cases:
//
//
//     (-12, 2, -6)  ->  true
// (-12, 2, -5)  ->  false
//
// (45, 1, 6)    ->  false
// (45, 5, 15)   ->  true
//
// (4, 1, 4)     ->  true
// (15, -5, 3)   ->  true

// fn(num, num, num) => boolean

function isDivideBy(num, a, b){
    return num % a === 0 && num % b === 0;
}

// another solution
// function isDivideBy(number, a, b) {
//   return [a, b].every(i => number % i === 0)
// }

module.exports = isDivideBy;