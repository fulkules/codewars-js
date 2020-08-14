// Return an array containing the numbers from 1 to N, where N is the parametered
// value. N will never be less than 1 (in C#, N might be less than 1).
//
// C# ONLY: If N is smaller than or equal to 0, throw an ArgumentOutOfRangeException!
//     Replace certain values however if any of the following conditions are met:
//
//     If the value is a multiple of 3: use the value 'Fizz' instead
// If the value is a multiple of 5: use the value 'Buzz' instead
// If the value is a multiple of 3 & 5: use the value 'FizzBuzz' instead
// C# method calling example:
//
//     string[] result = FizzBuzz.GetFizzBuzzArray(3); // => [ "1", "2", "Fizz" ]

// fn(num) => array
// initialize empty array
// iterate up to n
// check conditions divisible by 3 & 5
    // add FizzBuzz to array
// if divisible by 3
    // add Fizz to array
// if divisible by 5
    // add Buzz to array

function fizzbuzz(n){
    let fbArr = [];
    for(let i = 1; i <= n; i++){
        if(i % 5 === 0 && i % 3 === 0){
            fbArr.push('FizzBuzz')
        } else if(i % 3 === 0){
            fbArr.push('Fizz');
        } else if(i % 5 === 0){
            fbArr.push('Buzz');
        } else {
            fbArr.push(i);
        }
    }
    return fbArr;
}

// voted best practice
// function fizzbuzz(n)
// {
//   var i = 1, arr = [];
//   while(i <= n) {
//     var fizz = (i % 3 == 0);
//     var buzz = (i % 5 == 0);
//     if(fizz || buzz) {
//       arr.push((fizz?"Fizz":"") + (buzz?"Buzz":""));
//     }
//     else {
//       arr.push(i);
//     }
//     i++;
//   }
//   return arr;
// }

// runner-up
// var fizzify = fizzbuzz = function(n)
// {
//   return Array.apply(null, new Array(n)).map(function(e, i){
//     return (++i % 3 ? '' : 'Fizz' ) + (i % 5 ? '' : 'Buzz') || i;
//   });
// }

// other solution
// function fizzbuzz(n) {
//   var fizzified = [];
//   for (var i = 1; i <= n; i++) {
//     var val = '';
//     if (i % 3 == 0) val += 'Fizz';
//     if (i % 5 == 0) val += 'Buzz';
//     fizzified.push(val || i);
//   }
//   return fizzified;
// }
//
// function fizzify(n) {
//   return fizzbuzz(n);
// }

module.exports = fizzbuzz;