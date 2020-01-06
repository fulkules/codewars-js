const find_average = require('./index');

describe('find_average', function() {
    it('should return a number', function() {
        expect(typeof find_average([1,2,3])).toBe('number');
    });
    test('returns the average of given nums in an array', function() {
        expect(find_average([1,2,3])).toStrictEqual(2);
        expect(find_average([1,1,1])).toStrictEqual(1);
    });
})