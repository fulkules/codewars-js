const maps = require('./index');

describe('maps', function() {
    it('should return an array', function() {
        expect(maps([1,2,3])).toBeInstanceOf(Array);
    });
        test('returns an array with each value from arg doubled', function() {
        expect(maps([1,2,3])).toStrictEqual([2,4,6]);
        expect(maps([4,1,1,4])).toStrictEqual([8,2,2,8]);
        expect(maps([3,3,3,3])).toStrictEqual([6,6,6,6]);
    });
})