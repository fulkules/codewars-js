// Write a function that accepts two square matrices (N x N two dimensional arrays), and return the sum of the two.
// Both matrices being passed into the function will be of size N x N (square), containing only integers.
//
// How to sum two matrices:
//
// Take each cell [n][m] from the first matrix, and add it with the same [n][m] cell from the second matrix.
// This will be cell [n][m] of the solution matrix.
//
// Visualization:
//
// |1 2 3|     |2 2 1|     |1+2 2+2 3+1|     |3 4 4|
// |3 2 1|  +  |3 2 3|  =  |3+3 2+2 1+3|  =  |6 4 4|
// |1 1 1|     |1 1 3|     |1+1 1+1 1+3|     |2 2 4|
// Example
// matrixAddition(
//   [ [1, 2, 3],
//     [3, 2, 1],
//     [1, 1, 1] ],
// //      +
//   [ [2, 2, 1],
//     [3, 2, 3],
//     [1, 1, 3] ] )
//
// // returns:
//   [ [3, 4, 4],
//     [6, 4, 4],
//     [2, 2, 4] ]


// fn(arr, arr) => arr
// initialize an empty matrix
// iterate total rows in array matrix
// initialize an empty row
// iterate the rows themselves
// add the values from each matching row and idx position put in empty row
// put each new row into the empty matrix
// return the matrix


function matrixAddition(a, b){
    let matrix = [];
    for(let i = 0; i < a.length; i++){
        let rowA = a[i], rowB = b[i], newRow = [];
        for(let j = 0; j < rowA.length; j++){
            newRow.push(rowA[j] + rowB[j]);
        }
        matrix.push(newRow);
    }
    return matrix;
}

// best practice - simplified
// function matrixAddition(a, b){
//   return a.map(function(row, i) {
//     return row.map(function(col, j) {
//       return col + b[i][j];
//     });
//   });
// }

module.exports = matrixAddition;