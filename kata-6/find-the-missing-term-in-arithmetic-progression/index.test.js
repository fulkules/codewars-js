const findMissing = require('./index');

describe('findMissing', function() {
    it('should return a number', function() {
        expect(typeof findMissing([1, 3, 4])).toBe('number');
    });
    test('returns the missing number in arithmetic progression', function() {
        expect(findMissing([1, 3, 4])).toStrictEqual(2);
        expect(findMissing([1, 2, 4])).toStrictEqual(3);
        expect(findMissing([1, 3, 5, 9, 11])).toStrictEqual(7);
    });
});