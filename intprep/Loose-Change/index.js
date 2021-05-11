// Write a function that takes in a number representing cents, and returns an Object with the fewest amount of Quarters, Dimes, Nickels, and Pennies it would take to equal the amount given.

// {
 /* Quarters: 0, */
 /* Dimes: 0, */
 /* Nickels: 0, */
 /* Pennies: 0 */
/* } */

// 23 => 0Q, 2D, 0N, 3P
// 103 => 4 Q, 0 D, 0 N, 3 P
// Q 103 / 25 = 4 remainder 3
// D 3 / 10 < 1 return 0
// N 3 / 5 < 1 return 0
// P 3 / 1 > 0 return 3

const looseChange = cents => {
    // set our object with initialized values to 0
    let change = { Quarters: 0, Dimes: 0, Nickels: 0, Pennies: 0 }
    // start with obj.Quarters dividing & set val Math.floor
    change.Quarters = Math.floor(cents/25);
    // subtract this from the initial value
    cents -= 25*change.Quarters
    // go to obj.Dimes, divide & set val Math.floor
    change.Dimes = Math.floor(cents/10);
    // subtract from initial value
    cents -= 10*change.Dimes
    // go to obj.Nickels, divide & set val Math.floor
    change.Nickels = Math.floor(cents/5);
    // subtract from initial value
    cents -= 5*change.Nickels
    // go to obj.Pennies, divide & set val Math.floor
    change.Pennies = cents;
    // return the modified object
    return change
};

module.exports = looseChange;