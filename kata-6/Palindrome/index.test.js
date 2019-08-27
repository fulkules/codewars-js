const palindrome = require('./index');

test('Test 1', () => {
    expect(palindrome("A man, a plan, a canal, Panama")).toBe(true);
})
  
test('Test 2', () => {
    expect(palindrome("Taco cat.")).toBe(true);
})

test('Test 3', () => {
    expect(palindrome("abcbaa")).toBe(false);
})