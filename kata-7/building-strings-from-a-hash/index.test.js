const solution = require('./index');

describe(solution, () => {
    it('should return a string', () => {
        expect(typeof (solution({a: 1, b: '2'}))).toBe('string');
    });
    it('should return a human-readable string of the obj arg', () => {
        expect(solution({a: 1, b: '2'})).toStrictEqual("a = 1,b = 2");
    });
});