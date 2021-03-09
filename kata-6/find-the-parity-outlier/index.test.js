const findOutlier = require('./index');

describe(findOutlier, () => {
    it('should return a number', () => {
        expect(typeof findOutlier([0, 1, 2])).toBe('number');
    });
    it('should return the outlier in the array', () => {
        expect(findOutlier([0, 1, 2])).toStrictEqual(1);
        expect(findOutlier([1, 2, 3])).toStrictEqual(2);
        expect(findOutlier([2, 6, 8, 10, 3])).toStrictEqual(3);
        expect(findOutlier([ 2, -6, 8, -10, -3 ])).toStrictEqual(-3);
    });
});