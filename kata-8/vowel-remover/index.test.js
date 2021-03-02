const shortcut = require('./index');

describe(shortcut, () => {
    it('should return a string', () => {
        expect(typeof shortcut('hello')).toBe('string');
    });
    it('Should return the string with all (lowercase) vowels removed', () => {
        expect(shortcut('hello')).toStrictEqual('hll');
        expect(shortcut('how are you today?')).toStrictEqual('hw r y tdy?');
        expect(shortcut('complain')).toStrictEqual('cmpln');
        expect(shortcut('never')).toStrictEqual('nvr');
    });
});