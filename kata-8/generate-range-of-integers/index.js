// Implement a function named generateRange(min, max, step), which takes three arguments
// and generates a range of integers from min to max, with the step. The first integer is the
// minimum value, the second is the maximum of the range and the third is the step. (min < max)
//
// Task
// Implement a function named
//
// generateRange(2, 10, 2) // should return array of [2,4,6,8,10]
// generateRange(1, 10, 3) // should return array of [1,4,7,10]



function generateRange(min, max, step){
    let range = [];
    for(let i = min; i <= max; i += step){
        range.push(i);
    }
    return range;
}

// alternate solution
// const generateRange = (min, max, step) => Array.from(Array(Math.floor((max - min) / step) + 1), (_, i) => min + step * i);

module.exports = generateRange;