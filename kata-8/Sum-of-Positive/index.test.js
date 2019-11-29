const positiveSum = require('./index');

describe('positiveSum', function() {
    it('should return the sum of all positive integers in a given array', function() {
        expect(positiveSum([1,2,3,4,5])).toStrictEqual(15);
        expect(positiveSum([1,-2,3,4,5])).toStrictEqual(13);
        expect(positiveSum([])).toStrictEqual(0);
        expect(positiveSum([-1,-2,-3,-4,-5])).toStrictEqual(0);
    });
})