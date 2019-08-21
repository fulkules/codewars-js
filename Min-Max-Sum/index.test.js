const minMaxSum = require('./index');

test('Test 1', () => {
    expect(minMaxSum([1,3,5,7,9])).toStrictEqual([16, 24]);
})
  
test('Test 2', () => {
    expect(minMaxSum([2,4,6,8,10])).toStrictEqual([20, 28]);
})

test('Test 3', () => {
    expect(minMaxSum([3,4,5,6,7])).toStrictEqual([18, 22]);
})