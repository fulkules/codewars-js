const addFive = require('./index');

describe('addFive', function(){
    it('should return a number', () => {
        expect(typeof addFive(5)).toBe('number');
    });
    it('should return', () => {
        expect(addFive(5)).toEqual(10);
        expect(addFive(0)).toEqual(5);
        expect(addFive(-5)).toEqual(0);
    });
});