const index = require('./index');

describe('index', function() {
    it('should return a number', function() {
        expect(typeof index([1, 2, 3, 4], 2)).toBe('number');
    });
    it('should return the nth power of the element in the array with the index of N', function() {
        expect(index([1, 2, 3, 4], 2)).toStrictEqual(9);
        expect(index([1, 2],3)).toStrictEqual(-1);
    });
});