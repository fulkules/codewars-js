const findOdd = require('./index');

describe('findOdd', function(){
    it('should return a number', () => {
        expect(typeof findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5])).toBe('number');
    });
    it('should return the number that occurs an odd number of times', () => {
        expect(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5])).toStrictEqual(5);
        expect(findOdd([5,4,3,2,1,5,4,3,2,10,10])).toStrictEqual(1);
    });
});