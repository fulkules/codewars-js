const isLeapYear = require('./index');

describe(isLeapYear, () => {
    it('should return a boolean', () => {
        expect(typeof isLeapYear(1984)).toBe('boolean');
    });
    it('should detect leap years', () => {
        expect(isLeapYear(1234)).toBeFalsy();
        expect(isLeapYear(1984)).toBeTruthy();
        expect(isLeapYear(2010)).toBeFalsy();
        expect(isLeapYear(2000)).toBeTruthy();
        expect(isLeapYear(2400)).toBeTruthy();
        expect(isLeapYear(1900)).toBeFalsy();
        expect(isLeapYear(1000)).toBeFalsy();
    });
});