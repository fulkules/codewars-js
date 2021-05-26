const dataReverse = require('./index');

describe('dataReverse', function(){
    it('should return an array', () => {
        expect(dataReverse([1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0])).toBeInstanceOf(Array);
    });
    it('should return', () => {
        expect(dataReverse([1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0])).toEqual([1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1]);
        expect(dataReverse([0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1])).toEqual([0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0]);
    });
});