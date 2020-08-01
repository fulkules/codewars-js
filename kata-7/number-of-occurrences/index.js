// Write a function that returns the number of occurrences of an element in an array.
//
//     Examples
// var arr = [0, 1, 2, 2, 3];
// arr.numberOfOccurrences(0) === 1;
// arr.numberOfOccurrences(4) === 0;
// arr.numberOfOccurrences(2) === 2;
// arr.numberOfOccurrences("a") === 0;

// Array prototype method (int) => int
// use context of this to reference the array
// initialize a count var
//  iterate the array
// increment the count for every time we encounter arg

Array.prototype.numberOfOccurrences = function(occ) {
    let count = 0;
    for(let i = 0; i < this.length; i++){
        if(this[i] === occ){
            count++;
        }
    }
    return count;
};

// best practice, use filter
// Array.prototype.numberOfOccurrences = function(search) {
//   return this.filter( (num) => num === search ).length;
// };

// using reduce
// Array.prototype.numberOfOccurrences = function(ocurrence) {
//   return this.reduce( (total, value) => (value === ocurrence ? total + 1 : total), 0 );
// };

module.exports = Array.prototype.numberOfOccurrences;