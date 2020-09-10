const growingPlant = require('./index');

describe(growingPlant, () => {
    it('should return a number', () => {
        expect(typeof growingPlant(100,10,910)).toBe('number');
    });
    it('should return the number of days it takes for the plant to reach the desired height', () => {
        expect(growingPlant(100,10,910)).toStrictEqual(10);
        expect(growingPlant(10, 9, 4)).toStrictEqual(1);
    });
});