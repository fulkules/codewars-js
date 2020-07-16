// Finish the solution so that it sorts the passed in array of numbers.
//     If the function passes in an empty array or null/nil value then it should return an empty array.
//
//     For example:
//
//     solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []

// fn(arr) => arr
// early return [] for falsy arg
// sort the array in numeric order

const solution = nums => {
    if(!nums || !nums.length) return [];
    return nums.sort((a,b) => a - b);
};

// condensed further
// const solution = nums => (nums || []).sort((a,b) => a - b);

// best practice -- more legible
// function solution(nums){
//     return (nums || []).sort(function(a,b){
//         return a - b;
//     })
// };

module.exports = solution;