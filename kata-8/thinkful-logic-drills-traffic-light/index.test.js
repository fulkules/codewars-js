const updateLight = require('./index');

describe(updateLight, () => {
    it('should return a string', () => {
        expect(typeof updateLight('green')).toBe('string');
    });
    it('should return the next light color to change to', () => {
        expect(updateLight('green')).toStrictEqual('yellow');
        expect(updateLight('yellow')).toStrictEqual('red');
        expect(updateLight('red')).toStrictEqual('green');
    });
});