// This is a demo task.
//
// Write a function:
//
// function solution(A);
//
// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.
//
// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.
//
// Given A = [1, 2, 3], the function should return 4.
//
// Given A = [−1, −3], the function should return 1.
//
// Write an efficient algorithm for the following assumptions:
//
// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].

// fn(arr) => int
// remove duplicates & sort the array smallest to largest
// iterate, starting at 1
// return the first int that doesn't match idx + 1 position

function solution(A){
    let sorted = [...new Set(A)].sort((a, b) => a - b);
    for(let i = 0; i < sorted.length + 1; i++){
        if(sorted[i] < 0) return 1;
        if(sorted[i] !== i + 1) return (i + 1);
    }
}

module.exports = solution;