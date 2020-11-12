const sumOfMinimums = require('./index');

describe(sumOfMinimums, () => {
    it('should return a number', () => {
        expect(typeof (sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]))).toBe('number');
    });
    it('should return the sum of minimum values in each array', () => {
        expect(sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]])).toStrictEqual(9);
        expect(sumOfMinimums([[11, 12, 14, 54], [67, 89, 90, 56], [7, 9, 4, 3], [9, 8, 6, 7]])).toStrictEqual(76);
    });
});
