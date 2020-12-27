const formatMoney = require('./index');

describe('formatMoney', function(){
    it('should return a string', () => {
        expect(typeof formatMoney(39.99)).toBe('string');
    });
    it('should return a string of the number formatted in dollars and cents', () => {
        expect(formatMoney(39.99)).toStrictEqual('$39.99');
        expect(formatMoney(3)).toStrictEqual('$3.00');
        expect(formatMoney(3.1)).toStrictEqual('$3.10');
    });
});