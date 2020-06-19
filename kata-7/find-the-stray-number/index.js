// You are given an odd-length array of integers, in which all of them are the same, except for one single number.
//
//     Complete the method which accepts such an array, and returns that single different number.
//
//     The input array will always be valid! (odd-length >= 3)
//
// Examples
//     [1, 1, 2] ==> 2
//     [17, 17, 3, 17, 17, 17, 17] ==> 3


function stray(nums) {
    let start = nums[0];

    if(start !== nums[1]){
        return start === nums[2] ? nums[1] : start;
    }

    for(let i = 2; i < nums.length; i++){
        if(nums[i] !== start){
            return nums[i];
        }
    }
}

// refactor with array.prototype.find
// function stray(nums) {
//     return nums.find( elem => nums.indexOf(elem) === nums.lastIndexOf(elem) );
// }

// refactor using array.prototype.reduce
//  const stray = nums => nums.reduce( (a,b) => a ^ b );

module.exports = stray;