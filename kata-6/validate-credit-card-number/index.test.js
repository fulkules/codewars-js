const validate = require('./index');

describe('validate', function() {
    it('should return a boolean', function() {
        expect(typeof validate(123)).toBe('boolean');
    });
    test('returns', function() {
        expect(validate(123)).toBe(false);
        expect(validate(1)).toBe(false);
        expect(validate(2121)).toBe(true);
        expect(validate(1230)).toBe(true);
    });
});