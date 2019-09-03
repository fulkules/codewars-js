const digitalRoot = require('./index');

test('Test 1', () => {
    expect(digitalRoot(16)).toStrictEqual(7);
})

test('Test 2', () => {
    expect(digitalRoot(132189)).toStrictEqual(6);
})

test('Test 3', () => {
    expect(digitalRoot(493193)).toStrictEqual(2);
})