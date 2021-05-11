const looseChange = require('./index');

test('Test 1', () => {
    expect(looseChange(44)).toStrictEqual({Quarters: 1, Dimes: 1, Nickels: 1, Pennies: 4});
})

test('Test 2', () => {
    expect(looseChange(23)).toStrictEqual({Quarters: 0, Dimes: 2, Nickels: 0, Pennies: 3});
})

test('Test 3', () => {
    expect(looseChange(49)).toStrictEqual({Quarters: 1, Dimes: 2, Nickels: 0, Pennies: 4});
})
  
