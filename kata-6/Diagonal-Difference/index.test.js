const diagonalDiff = require('./index');

test('Test 1', () => {
    expect(diagonalDiff([
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ])).toStrictEqual(0);
})
  
test('Test 2', () => {
    expect(diagonalDiff([
        [-3, 2, 5],
        [5,7,3],
        [-5,1,6]
    ])).toStrictEqual(3);
})

test('Test 3', () => {
    expect(diagonalDiff([
        [3, 2, -4],
        [5,8,3],
        [-7,1,-2]
    ])).toStrictEqual(12);
})

