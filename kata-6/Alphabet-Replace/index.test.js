const alphabetPosition = require('./index');

test('Test 1', () => {
    expect(alphabetPosition("The sunset sets at twelve o' clock.")).toStrictEqual("20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");
})
test('Test 2', () => {
    expect(alphabetPosition("1?m^((}3")).toStrictEqual("13");
})
test('Test 3', () => {
    expect(alphabetPosition("@x&(4!6m")).toStrictEqual("24 13");
})
test('Test 4', () => {
    expect(alphabetPosition("n t@|_,5")).toStrictEqual("14 20");
})