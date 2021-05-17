// In mathematics, Pascal's triangle is a triangular array of the binomial coefficients expressed with formula
//
// (nk)=n!k!(n−k)!\lparen {n \atop k} \rparen = \frac {n!} {k!(n-k)!}(
// k
// n
// ​
//  )=
// k!(n−k)!
// n!
// ​
//
// where n denotes a row of the triangle, and k is a position of a term in the row.
//
// Pascal's Triangle
//
// You can read Wikipedia article on Pascal's Triangle for more information.
//
// Task
// Write a function that, given a depth n, returns n top rows of Pascal's Triangle flattened into a one-dimensional list/array.
//
// Example:
// n = 1: [1]
// n = 2: [1,  1, 1]
// n = 4: [1,  1, 1,  1, 2, 1,  1, 3, 3, 1]
// Note
// Beware of overflow. Requested terms of a triangle are guaranteed to fit into the returned type, but depending on
// seleced method of calculations, intermediate values can be larger.

// fn(num) => arr


function pascalsTriangle(n){
    let triangle = [];

//First base case
    if(n === 0) return triangle;

    for (let i = 0; i < n; i++) {
        triangle[i] = [];
//Second base case
        triangle[i][0] = 1;

        for (let j = 1; j < i; j++) {
            triangle[i][j] = triangle[i-1][j-1] + triangle[i-1][j]
        }
//The last element of all rows are always 1.
        triangle[i][i] = 1;
    }
    return [].concat(...triangle);  // triangle.flat() equivalent for older js versions
}

// best practice
// function pascalsTriangle(n) {
//   let pascal = [];
//   let idx = 0;
//
//   for ( let i = 0; i < n; i++ ) {
//     idx = pascal.length - i;
//     for ( let j = 0; j < i+1; j++ ) {
//       if ( j === 0 || j === i ) {
//         pascal.push(1);
//       } else {
//         pascal.push( pascal[ idx+j ] + pascal[ idx+j-1 ] );
//       }
//     }
//   }
//
//   return pascal;
// }

module.exports = pascalsTriangle;