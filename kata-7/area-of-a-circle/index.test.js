const circleArea = require('./index');

describe(circleArea, () => {
    it('should return a boolean or number', () => {
        expect(typeof circleArea(0)).toBe('boolean');
        expect(typeof circleArea(68)).toBe('number');
    });
    it('should return the surface area of a circle', () => {
        expect(circleArea(0)).toBeFalse();
        expect(circleArea('number')).toBeFalse();
        expect(circleArea(68)).toStrictEqual(14526.72);
    });
});