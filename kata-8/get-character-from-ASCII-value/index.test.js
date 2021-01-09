const geteChar = require('./index');

describe('geteChar', function(){
    it('should return a string', () => {
        expect(typeof geteChar(55)).toBe('string');
    });
    it('should return the ascii character as a string', () => {
        expect(geteChar(55)).toStrictEqual('7');
        expect(geteChar(61)).toStrictEqual('=');
        expect(geteChar(65)).toStrictEqual('A');
    });
});