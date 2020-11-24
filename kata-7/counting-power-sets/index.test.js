const powers = require('./index');

describe('powers', function() {
    it('should return a number', function() {
        expect(typeof powers([1,2,3])).toBe('number');
    });
    it('should return the number of subsets possible from the list', function() {
        expect(powers([1,2,3])).toStrictEqual(8);
        expect(powers([])).toStrictEqual(1);
        expect(powers([1])).toStrictEqual(2);
        expect(powers([1,2,3,4])).toStrictEqual(16);
    });
});