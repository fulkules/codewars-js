const validateUser = require('./index');

describe(validateUser, () => {
    it('should return a boolean', () => {
        expect(typeof validateUser('asdfd')).toBe('boolean');
    });
    it('should detect a valid username', () => {
        expect(validateUser('asdfads')).toBe(true);
        expect(validateUser('asdr_33')).toBe(true);
        expect(validateUser('Hass')).toBe(false);
        expect(validateUser('')).toBe(false);
    });
});