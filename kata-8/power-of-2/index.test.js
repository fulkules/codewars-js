const powersOfTwo = require('./index');

describe('powersOfTwo', function(){
    it('should return an array', () => {
        expect(powersOfTwo(0)).toBeInstanceOf(Array);
    });
    it('should return', () => {
        expect(powersOfTwo(0)).toEqual([1]);
        expect(powersOfTwo(1)).toEqual([1,2]);
        expect(powersOfTwo(4)).toEqual([1,2,4,8,16]);
    });
});