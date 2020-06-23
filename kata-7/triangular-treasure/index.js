// Triangular numbers are so called because of the equilateral triangular shape that they occupy when laid out as dots. i.e.
// //
// // 1st (1)   2nd (3)    3rd (6)
// // *             **        ***
// //               *         **
// //                         *
// // You need to return the nth triangular number. You should return 0 for out of range values:
// //
// //     triangular(0)==0,
// //     triangular(2)==3,
// //     triangular(3)==6,
// //     triangular(-10)==0

function triangular(n) {
    if (n < 1) return 0;
    // initialize a counter
    let count = 0;
    // iterate from n down to 1
    for (let i = n; i > 0; i--){
        // each iteration adds i to counter
        count += i;
    }
    return count;
}

//  short solution
// const triangular = n => return (n > 0) ? ( (n*n) + n ) / 2 : 0;

module.exports = triangular;