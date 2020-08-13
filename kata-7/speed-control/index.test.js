const gps = require('./index');

describe(gps, () => {
    it('should return a number', () => {
        expect(typeof gps(15, [0.0, 0.19, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25])).toBe('number');
    });
    it('should detect leap years', () => {
        expect(gps(15, [0.0, 0.19, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25])).toStrictEqual(74);
    });
});