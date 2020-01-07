const monkeyCount = require('./index');

describe('monkeyCount', function() {
    it('should return an array', function() {
        expect(monkeyCount(5)).toBeInstanceOf(Array);
    });
    test('returns an array starting at 1 up to num param', function() {
        expect(monkeyCount(3)).toStrictEqual([1,2,3]);
        expect(monkeyCount(7)).toStrictEqual([1,2,3,4,5,6,7]);
    });
})