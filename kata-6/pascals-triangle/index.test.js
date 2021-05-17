const pascalsTriangle = require('./index');

describe('pascalsTriangle', function() {
    it('should return an array', function() {
        expect(pascalsTriangle(3)).toBeInstanceOf(Array);
    });
    test('returns', function() {
        expect(pascalsTriangle(3)).toEqual([1, 1, 1, 1, 2, 1]);
        expect(pascalsTriangle(4)).toEqual([1, 1, 1, 1, 2, 1, 1, 3, 3, 1]);
        expect(pascalsTriangle(6)).toEqual([1, 1, 1, 1, 2, 1, 1, 3, 3, 1, 1, 4, 6, 4, 1, 1, 5, 10, 10, 5, 1]);
    });
});