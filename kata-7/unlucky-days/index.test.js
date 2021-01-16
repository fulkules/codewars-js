const unluckyDays = require('./index');

describe('unluckyDays', function(){
    it('should return a number', () => {
        expect(typeof unluckyDays(1586)).toBe('number');
    });
    it('should return the number of unlucky days in a given year', () => {
        expect(unluckyDays(1586)).toStrictEqual(1);
        expect(unluckyDays(1812)).toStrictEqual(2);
        expect(unluckyDays(1001)).toStrictEqual(3);
        expect(unluckyDays(2065)).toStrictEqual(3);
    });
});