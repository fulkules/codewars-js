const setAlarm = require('./index');

describe('setAlarm', function() {
    it('should return a boolean', function() {
        expect(typeof setAlarm(true, true)).toBe('boolean');
    });
    test('returns wheter or not you are employed or on vacation', function() {
        expect(setAlarm(true, true)).toBe(false);
        expect(setAlarm(false, true)).toBe(false);
        expect(setAlarm(false, false)).toBe(false);
        expect(setAlarm(true, false)).toBe(true);
    });
});