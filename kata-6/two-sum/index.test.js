const twoSum = require('./index');

describe('twoSum', function() {
    it('should return an array', function() {
        expect(twoSum([1,2,3], 4)).toBeInstanceOf(Array);
    });
    test('returns an array of indexes from the numbers that when added together will equal the target', function() {
        expect(twoSum([1,2,3], 4)).toStrictEqual([0,2]);
        expect(twoSum([1234, 5678, 9012], 14690)).toStrictEqual([1,2]);
        expect(twoSum([2,2,3], 4)).toStrictEqual([0,1]);
    });
});