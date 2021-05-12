// Your task, is to create NxN multiplication table, of size provided in parameter.
//
// for example, when given size is 3:
//
// 1 2 3
// 2 4 6
// 3 6 9
// for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]

// fn(num) => array
// 3
// x = [1, 2, 3], y = [1, 2, 3]
// iterate x values
    // iterate y values
        // multiply each and return new array of arrays

const multiplicationTable = (size) => {
    let table = [];
    for(let i = 1; i <= size; i++){
        let inner = [];
        for(let j = 1; j <=size; j++){
            inner.push(i*j);
        }
        table.push(inner);
    }
    return table;
};

module.exports = multiplicationTable;