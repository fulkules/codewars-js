// Write a function `solution` that, given an integer N, returns the maximum possible value
// obtained by inserting one '5' digit inside the decimal representation of integer N.
//
//     Examples:
//
// N = 268  => 5268
// N = 670 => 6750
// N = 0 => 50
// N = -999 => -5999
//
// Assume that:
//     * N is an integer within the range [-8,000 .. 8,000]
//
// In your solution focus on correctness.
// The performance of your solution will not be the focus of the assessment.
//

// fn(num) => num
// if num is positive need to find first position where num < 5
    // put a 5 before this position
// if num is negative need to find  first position where num > 5
    // put a 5 before this position
// return the new number

// 268
    // ['2', '6', '8']
    // idx at 0 meets condition, so put the 5 in
        // ['5', '2', '6', '8']
// join the array and convert to num
// 5268

function solution(N){
    let idx, first,
        arr = Math.abs(N).toString().split('');
    if(N >= 0){
        first = arr.find(el => el < 5)
    } else {
        first = arr.find(el => el > 5);
    }
    idx = arr.indexOf(first);
    arr.splice(idx, 0, '5');

    return (N >= 0) ? Number(arr.join('')) : -(Number(arr.join('')));
}

module.exports = solution;