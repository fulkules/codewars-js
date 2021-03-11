const { God, Man, Woman, Human } = require('.');

test('Test 1', () => {
    const humans = God.create();
    expect(humans[0] instanceof Man).toBe(true);
});

test('Test 2', () => {
    const humans = God.create();
    expect(humans[1] instanceof Woman).toBe(true);
});
