const distinct = require('./index');

describe('distinct', function() {
    it('should return an array', function() {
        expect(distinct([1,1,2])).toBeInstanceOf(Array);
    });
    test('returns a new array of unique items', function() {
        expect(distinct([1])).toEqual([1]);
        expect(distinct([1,1,2])).toEqual([1,2]);
        expect(distinct([1,2])).toEqual([1,2]);
    });
});