const findDifference = require('./index');

describe('findDifference', function() {
    it('should return a number', function() {
        expect(typeof findDifference([3, 2, 5], [1, 4, 4])).toBe('number');
    });
    test('returns the difference in cube volume from the given dimensions', function() {
        expect(findDifference([3, 2, 5], [1, 4, 4])).toStrictEqual(14);
        expect(findDifference([9, 7, 2], [5, 2, 2])).toStrictEqual(106);
    });
});