const solution = require('./index');

describe(solution, () => {
    test ('test 1', () => {
        expect(solution('abcde', 'cde')).toBeTruthy();
        expect(solution('abcde', 'abc')).toBeFalsy();
        expect(solution('abc', '')).toBeTruthy();
    })
});