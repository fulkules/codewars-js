const comp = require('./index');

test('Test 1', () => {
    expect(comp([121,144,19,161,19,144,19,11], [121,14641,20736,361,25921,361,20736,361])).toBe(true);
});

test('Test 2', () => {
    expect(comp([121,144,19,161,19,144,19,11], [11*11,121*121,144*144,19*19,161*161,19*19,144*144,19*19])).toBe(true);
});

test('Test 3', () => {
    expect(comp([121,144,19,161,19,144,19,11], [132,14641,20736,361,25921,361,20736,361])).toBe(false);
});