const sumDigPow = require('./index');

describe('sumDigPow', function(){
    it('should return an array', () => {
        expect(sumDigPow(1, 10)).toBeInstanceOf(Array);
    });
    it('should return a list of numbers within a range where sum of digits raised to consecutive powers is same as the num', () => {
        expect(sumDigPow(1, 10)).toStrictEqual([1,2,3,4,5,6,7,8,9]);
        expect(sumDigPow(1, 100)).toStrictEqual([1,2,3,4,5,6,7,8,9,89]);
        expect(sumDigPow(50, 150)).toStrictEqual([89,135]);
        expect(sumDigPow(10, 100)).toStrictEqual([89]);
        expect(sumDigPow(90, 100)).toStrictEqual([]);
    });
});