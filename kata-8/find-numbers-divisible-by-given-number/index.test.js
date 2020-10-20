const divisibleBy = require('./index');

describe('divisibleBy', function() {
    it('should return an array', function() {
        expect(divisibleBy([1, 2, 3, 4, 5, 6], 2)).toBeInstanceOf(Array);
    });
    test('returns the numbers in the array divisible by given divisor', function() {
        expect(divisibleBy([1, 2, 3, 4, 5, 6], 2)).toStrictEqual([2, 4, 6]);
        expect(divisibleBy([0], 4)).toStrictEqual([0]);
        expect(divisibleBy([1, 3, 5], 2)).toStrictEqual([]);
    });
});