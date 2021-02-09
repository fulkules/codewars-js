const swapValues = require('./index');

describe('swapValues', function() {
    it('should return an array', function() {
        expect(swapValues([1, 2])).toBeInstanceOf(Array);
    });
    it('should swap the numbers in the arrray', function() {
        expect(swapValues([1, 2])).toStrictEqual([2, 1]);
    });
});