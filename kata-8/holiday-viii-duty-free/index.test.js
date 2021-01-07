const dutyFree = require('./index');

describe('dutyFree', function(){
    it('should return a number', () => {
        expect(typeof dutyFree(1)).toBe('number');
    });
    it('should return how many bottles of duty free whiskey you would need to buy to save over the street price', () => {
        expect(dutyFree(12, 50, 1000)).toStrictEqual(166);
        expect(dutyFree(17, 10, 500)).toStrictEqual(294);
        expect(dutyFree(24, 35, 3000)).toStrictEqual(357);
    });
});