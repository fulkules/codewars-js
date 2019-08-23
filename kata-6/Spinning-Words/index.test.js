const spinWords = require('./index');

test('Test 1', () => {
    expect(spinWords("This is a test")).toStrictEqual("This is a test");
})
  
test('Test 2', () => {
    expect(spinWords("Hey fellow warriors")).toStrictEqual("Hey wollef sroirraw");
})

test('Test 3', () => {
    expect(spinWords("This is another test")).toStrictEqual("This is rehtona test");
})