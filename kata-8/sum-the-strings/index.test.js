const sumStr = require('./index');

describe('sumStr', function(){
    it('should return a string', () => {
        expect(typeof sumStr('4', '5')).toBe('string');
    });
    it('should return', () => {
        expect(sumStr('4', '5')).toEqual('9');
        expect(sumStr('34', '5')).toEqual('39');
        expect(sumStr('', '')).toEqual('0');
    });
});