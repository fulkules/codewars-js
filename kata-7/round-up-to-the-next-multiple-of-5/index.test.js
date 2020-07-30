const roundToNext5 = require('./index');

describe(roundToNext5, () => {
    it('should return a number', () => {
        expect(typeof roundToNext5(2)).toBe('number');
    });
    it('should return the next multiple of 5 for the given num', () => {
        expect((roundToNext5(2))).toStrictEqual(5);
        expect((roundToNext5(7))).toStrictEqual(10);
        expect((roundToNext5(-2))).toStrictEqual(0);
        expect((roundToNext5(-5))).toStrictEqual(-5);
    });
});