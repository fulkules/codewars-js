const scramble = require('./index');

test('Test 1', () => {
    expect(scramble('rkqodlw', 'world')).toBe(true);
})
  
test('Test 2', () => {
    expect(scramble('cedewaraaossoqqyt', 'codewars')).toBe(true);
})

test('Test 3', () => {
    expect(scramble('katas', 'steak')).toBe(false);
})