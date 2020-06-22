const solution = require('./index');

describe(solution, () => {
    test('test 1', () => {
        expect(solution('1234567890')).toEqual(67890);
    })
});