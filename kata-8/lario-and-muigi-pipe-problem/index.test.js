const pipeFix = require('./index');

describe('pipeFix', function(){
    it('should return an array', () => {
        expect(pipeFix([1,2,3,12])).toBeInstanceOf(Array);
    });
    it('should return', () => {
        expect(pipeFix([1,2,3,5,6,8,9])).toEqual([1,2,3,4,5,6,7,8,9]);
        expect(pipeFix([1,2,3,12])).toEqual([1,2,3,4,5,6,7,8,9,10,11,12]);
        expect(pipeFix([-1, 4])).toEqual([-1,0,1,2,3,4]);
        expect(pipeFix([6,9])).toEqual([6,7,8,9]);
    });
});