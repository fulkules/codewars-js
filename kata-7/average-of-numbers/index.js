// #Get the averages of these numbers
//
// Write a method, that gets an array of integer-numbers and return
// an array of the averages of each integer-number and his follower, if there is one.
//
//     Example:
//
// Input:  [ 1, 3, 5, 1, -10]
// Output:  [ 2, 4, 3, -4.5]
// If the array has 0 or 1 values or is null or None, your method should return an empty array.

// fn(arr) => arr
// initialize an empty array variable
// if numbers is truthy and length is more than 1
// iterate the array starting at 1
    // put the average of i - 1 and i into an array
// return new array

function averages(numbers){
    let avgNums = [];
    if(!numbers) return avgNums;
    for(let i = 1; i < numbers.length; i++){
        let avg = (numbers[i - 1] + numbers[i]) / 2;
        avgNums.push(avg);
    }
    return avgNums;
}

// short syntax
// const averages = numbers =>
//   numbers
//     ? numbers
//         .map((number, index, array) => (number + array[index + 1]) / 2)
//         .slice(0, -1)
//     : []

module.exports = averages;