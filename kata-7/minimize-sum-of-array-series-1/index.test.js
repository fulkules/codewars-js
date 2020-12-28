const minSum = require('./index');

describe('minSum', function(){
    it('should return a number', () => {
        expect(typeof minSum([5,4,2,3])).toBe('number');
    });
    it('should return the minimum sum of the product of two integers', () => {
        expect(minSum([5,4,2,3])).toStrictEqual(22);
        expect(minSum([12,6,10,26,3,24])).toStrictEqual(342);
        expect(minSum([9,2,8,7,5,4,0,6])).toStrictEqual(74);
    });
});