const walkItOut = require('./index');

test('Test 1', () => {
    expect(walkItOut(['n','s','n','s','n','s','n','s','n','s'])).toBe(true);
});
test('Test 2', () => {
    expect(walkItOut(['w','e','w','e','w','e','w','e','w','e','w','e'])).toBe(false);
});
test('Test 3', () => {
    expect(walkItOut(['n','n','n','s','n','s','n','s','n','s'])).toBe(false);
});
test('Test 4', () => {
    expect(walkItOut(['n','n','s','s','e','n','s','s','w','n'])).toBe(true);
});