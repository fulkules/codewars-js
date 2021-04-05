const queueTime = require('./index');

describe('queueTime', function() {
    it('should return a number', function() {
        expect(typeof queueTime([], 1)).toBe('number');
    });
    test('returns the unique number in an array', function() {
        expect(queueTime([], 1)).toStrictEqual(0);
        expect(queueTime([1,2,3,4], 1)).toStrictEqual(10);
        expect(queueTime([2,3,10], 2)).toStrictEqual(12);
        expect(queueTime([2,2,3,3,4,4], 2)).toStrictEqual(9);
        expect(queueTime([1,2,3,4,5], 100)).toStrictEqual(5);
    });
});