const invert = require('./index');

describe('invert', function() {
    it('should return an array', function() {
        expect(invert([1,2,3,4,5])).toBeInstanceOf(Array);
    });
    test('returned array should be the digits of the number inverted', function() {
        expect(invert([1,2,3,4,5])).toStrictEqual([-1,-2,-3,-4,-5]);
        expect(invert([0])).toStrictEqual([0]);
        expect(invert([])).toStrictEqual([]);
    });
})