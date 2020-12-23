const generateRange = require('./index');

describe('generateRange', function(){
    it('should return an array', () => {
        expect(generateRange(2, 10,2)).toBeInstanceOf(Array);
    });
    it('should returna range of integers from min to max by the step', () => {
        expect(generateRange(2, 10, 2)).toStrictEqual([2,4,6,8,10]);
    });
});