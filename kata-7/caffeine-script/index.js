// Complete the function caffeineBuzz, which takes a non-zero integer as it's one argument.
//
// If the integer is divisible by 3, return the string "Java".
//
//     If the integer is divisible by 3 and divisible by 4, return the string "Coffee"
//
// If the integer is one of the above and is even, add "Script" to the end of the string.
//
//     Otherwise, return the string "mocha_missing!"
//
// caffeineBuzz(1)   => "mocha_missing!"
// caffeineBuzz(3)   => "Java"
// caffeineBuzz(6)   => "JavaScript"
// caffeineBuzz(12)  => "CoffeeScript"

// fn(num) => string
// initialize an empty str var
// run conditions on numbers
// concat to str var result of condition
// return string

function caffeineBuzz(n){
    let buzzed = '';
    if (n % 3 === 0 && n % 4 === 0) {
        buzzed += 'Coffee';
        if(n % 2 === 0) buzzed += 'Script';
    } else if (n % 3 === 0) {
        buzzed += 'Java';
        if(n % 2 === 0) buzzed += 'Script';
    } else {
        buzzed = 'mocha_missing!';
    }
    return buzzed;
}

// best practice
// function caffeineBuzz(n){
//   if (n % 12 === 0) return "CoffeeScript";
//   if (n % 6 === 0) return "JavaScript";
//   if (n % 3 === 0)  return "Java";
//   return "mocha_missing!";
// }

// single liner
// const caffeineBuzz = n => (n%3==0) ? ((n%4==0) ? "Coffee" : "Java") + ((n%2==0) ? "Script" : "") : "mocha_missing!";

module.exports = caffeineBuzz;