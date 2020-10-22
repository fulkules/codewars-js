const oddCount = require('./index');

describe('oddCount', function() {
    it('should return an number', function() {
        expect(typeof oddCount(15)).toBe('number');
    });
    test('returns the number of positive odd numbers below n', function() {
        expect(oddCount(15)).toStrictEqual(7);
        expect(oddCount(7)).toStrictEqual(3);
    });
});