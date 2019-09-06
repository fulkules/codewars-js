const tribonacci = require('./index');

test('Test 1', () => {
    expect(tribonacci([1,1,1],10)).toStrictEqual([1,1,1,3,5,9,17,31,57,105]);
})
test('Test 2', () => {
    expect(tribonacci([0,0,1],10)).toStrictEqual([0,0,1,1,2,4,7,13,24,44]);
})
test('Test 3', () => {
    expect(tribonacci([1,2,3],10)).toStrictEqual([1,2,3,6,11,20,37,68,125,230]);
})
test('Test 4', () => {
    expect(tribonacci([1,1,1],1)).toStrictEqual([1]);
})