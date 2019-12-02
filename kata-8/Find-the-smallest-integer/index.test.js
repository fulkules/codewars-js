const smallestIntegerFinder = require('./index');

describe('smallestIntegerFinder', function() {
    it('should return the smallest of all integers in a given array', function() {
        expect(smallestIntegerFinder([34, 15, 88, 2])).toStrictEqual(2);
        expect(smallestIntegerFinder([34, -345, -1, 100])).toStrictEqual(-345);
        expect(smallestIntegerFinder([78,56,232,12,0])).toStrictEqual(0);
        expect(smallestIntegerFinder([1,56,232,12,8])).toStrictEqual(1);
    });
})