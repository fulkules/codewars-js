// Given two integers a and b, which can be positive or negative, find the sum of all the numbers between including them too and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples
// GetSum(1, 0) == 1   // 1 + 0 = 1
// GetSum(1, 2) == 3   // 1 + 2 = 3
// GetSum(0, 1) == 1   // 0 + 1 = 1
// GetSum(1, 1) == 1   // 1 Since both are same
// GetSum(-1, 0) == -1 // -1 + 0 = -1
// GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2

function getSum(a,b) {
    if(a === b) return a;
    const rangeSort = [a,b].sort((a,b) => a - b);
    let res = 0;
    for (let i = rangeSort[0]; i <= rangeSort[1]; i++) {
        res += i;
    }
    return res;
}

// best practice
// const getSum = (a, b) => {
    // let min = Math.min(a,b);
    // let max = Math.max(a,b);
    // return (max - min + 1) * (min + max) / 2;
// }

// recursion solution
// function getSum( a,b ){
//    if (a == b) return a;
//    else if (a < b) return a + getSum(a+1, b);
//    else return a + getSum(a-1,b);
// }

module.exports = getSum;