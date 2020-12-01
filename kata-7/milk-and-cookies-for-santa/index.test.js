const timeForMilkAndCookies = require('./index');

describe(timeForMilkAndCookies, () => {
    it('should return a boolean', () => {
        expect(typeof (timeForMilkAndCookies(new Date(2013, 11, 24)))).toBe('boolean');
    });
    it('should return the sum of all odd cubed numbers', () => {
        expect(timeForMilkAndCookies(new Date(2013, 11, 24))).toBe(true);
        expect(timeForMilkAndCookies(new Date(2013, 0, 23))).toBe(false);
    });
});