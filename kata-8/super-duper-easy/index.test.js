const problem = require('./index');

describe(problem, () => {
    it('should return a number', () => {
        expect(typeof problem(1)).toBe('number');
    });
    it('should return the first non-consecutive number in a given array', () => {
        expect(problem(1)).toStrictEqual(56);
        expect(problem(5)).toStrictEqual(256);
        expect(problem(1.2)).toStrictEqual(66);
        expect(problem('string')).toStrictEqual('Error');
    });
});