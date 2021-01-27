const findUniq = require('./index');

describe('findUniq', function() {
    it('should return a number', function() {
        expect(typeof findUniq([0,1,0])).toBe('number');
    });
    test('returns the unique number in an array', function() {
        expect(findUniq([0,1,0])).toStrictEqual(1);
        expect(findUniq([1,1,1,2,1,1])).toStrictEqual(2);
        expect(findUniq([8,8,8,8,8,7])).toStrictEqual(7);
    });
});