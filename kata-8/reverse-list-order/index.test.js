const reverseList = require('./index');

describe('reverseList', function() {
    it('should return an array', function() {
        expect(reverseList([1,2,3,4])).toBeInstanceOf(Array);
    });
    test('returns an array in reverse order', function() {
        expect(reverseList([1,2,3,4])).toEqual([4,3,2,1]);
        expect(reverseList([3,1,5,4])).toEqual([4,5,1,3]);
    });
});