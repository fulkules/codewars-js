const arr = require('./index');

describe('arr', function() {
    it('should return a Array', function() {
        expect(arr(4, 2, 6)).toBeInstanceOf(Array);
    });
    test('returns an array up to n-1', function() {
        expect(arr(5)).toEqual([0, 1, 2, 3, 4]);
        expect(arr(3)).toEqual([0, 1, 2]);
        expect(arr()).toEqual([]);
    });
});