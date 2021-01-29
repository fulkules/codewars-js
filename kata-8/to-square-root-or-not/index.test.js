const squareOrSquareRoot = require('./index');

describe('squareOrSquareRoot', function() {
    it('should return an array', function() {
        expect(squareOrSquareRoot([ 4, 3, 9, 7, 2, 1 ])).toBeInstanceOf(Array);
    });
    test('returns a new array with either square root (if whole num) or squared value', function() {
        expect(squareOrSquareRoot([ 4, 3, 9, 7, 2, 1 ])).toEqual([ 2, 9, 3, 49, 4, 1 ]);
        expect(squareOrSquareRoot([ 100, 101, 5, 5, 1, 1 ])).toEqual([10, 10201, 25, 25, 1, 1]);
    });
});