const squareSum = require('./index');

describe('squareSum', function() {
    it('should square each number passed in and then sum the result', function() {
        expect(squareSum([1,2,2])).toStrictEqual(9);
        expect(squareSum([3,3,3])).toStrictEqual(27);
        expect(squareSum([5,5,5])).toStrictEqual(75);
        expect(squareSum([0,3,4,5])).toStrictEqual(50);
    });
})
