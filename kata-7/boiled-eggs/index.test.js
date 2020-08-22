const cookingTime = require('./index');

describe(cookingTime, () => {
    it('should return a number', () => {
        expect(typeof cookingTime(0)).toBe('number');
    });
    it('should return ', () => {
        expect(cookingTime(0)).toStrictEqual(0);
        expect(cookingTime(5)).toStrictEqual(5);
        expect(cookingTime(10)).toStrictEqual(10);
    });
});