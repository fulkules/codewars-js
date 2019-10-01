const findLetter = require('./index');

test('Test 1', () => {
    expect(findLetter(["a", "b", "c", "d", "f"])).toStrictEqual("e");
});

test('Test 2', () => {
    expect(findLetter(["O", "Q", "R", "S"])).toStrictEqual("P");
});