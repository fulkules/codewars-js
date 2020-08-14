const repeater = require('./index');

describe(repeater, () => {
    it('should return a string', () => {
        expect(typeof repeater('a', 5)).toBe('string');
    });
    it('should detect leap years', () => {
        expect(repeater('a', 5)).toStrictEqual('aaaaa');
    });
});