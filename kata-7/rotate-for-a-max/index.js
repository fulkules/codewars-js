// Let us begin with an example:
//
//     Take a number: 56789. Rotate left, you get 67895.
//
// Keep the first digit in place and rotate left the other digits: 68957.
//
// Keep the first two digits in place and rotate the other ones: 68579.
//
// Keep the first three digits and rotate left the rest: 68597. Now it is
// over since keeping the first four it remains only one digit which rotated is itself.
//
//     You have the following sequence of numbers:
//
//     56789 -> 67895 -> 68957 -> 68579 -> 68597
//     38458215 -> 84582153 -> 85821534
//     195881031 -> 958810311 -> 988103115
//
// and you must return the greatest: 68957.
//
// Task
// Write function max_rot(n) which given a positive integer n returns the maximum
// number you got doing rotations similar to the above example.
//
//     So max_rot (or maxRot or ... depending on the language) is such as:
//
// max_rot(56789) should return 68957
//
// max_rot(38458215) should return 85821534

// fn(num) => num
// initialize a string variable of the num
// initialize an array, with the starting string inside
// iterate the chars in the string
// build a string in 3 parts
    // from 0 to i
    // from i+1 to end
    // end with just the char at i
    // push this string into array outside the loop
// return the maximum number from the array


function maxRot(n){
    let string = n.toString();
    let result = [string];

    for(let i = 0; i < string.length; i++){
        string = `${string.slice(0, i)}${string.slice(i+1)}${string[i]}`;
        result.push(string);
    }

    return Math.max(...result);
}

module.exports = maxRot;