const repeats = require('./index');

describe(repeats, () => {
    it('should return a number', () => {
        expect(typeof (repeats([9, 10, 19, 13, 19, 13]))).toBe('number');
    });
    it('should return the sum of nums that occur only once in an array', () => {
        expect(repeats([9, 10, 19, 13, 19, 13])).toStrictEqual(19);
        expect(repeats([16, 0, 11, 4, 8, 16, 0, 11])).toStrictEqual(12);
    });
});
