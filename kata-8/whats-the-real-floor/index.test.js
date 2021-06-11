const getRealFloor = require('./index');

describe('getRealFloor', function(){
    it('should return a number', () => {
        expect(typeof getRealFloor(1)).toBe('number');
    });
    it('should return', () => {
        expect(getRealFloor(1)).toStrictEqual(0);
        expect(getRealFloor(5)).toStrictEqual(4);
        expect(getRealFloor(15)).toStrictEqual(13);
        expect(getRealFloor(0)).toStrictEqual(0);
        expect(getRealFloor(-2)).toStrictEqual(-2);
    });
});