const countPositivesSumNegatives = require('./index');

describe('countPositivesSumNegatives', function() {
    it('should return an array', function() {
        expect(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])).toBeInstanceOf(Array);
    });
    test('returned array should have length of 2', function() {
        expect(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])).toHaveLength(2);
    });
    test('returned array should return the count of all positives and sum of all negatives', function() {
        expect(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])).toStrictEqual([10,-65]);
        expect(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14])).toStrictEqual([8,-50]);
    });
})