const birthdayCakeCandles = require('./index');

test('Test 1', () => {
    expect(birthdayCakeCandles([3,1,3,2,4])).toStrictEqual(1);
})
  
test('Test 2', () => {
    expect(birthdayCakeCandles([2,4,3,2,4])).toStrictEqual(2);
})

test('Test 3', () => {
    expect(birthdayCakeCandles([1,3,2,4,2,4,4])).toStrictEqual(3);
})