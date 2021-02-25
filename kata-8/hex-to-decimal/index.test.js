const hexToDec = require('./index');

describe(hexToDec, () => {
    it('should return a number', () => {
        expect(typeof hexToDec("1")).toBe('number');
    });
    it('Should return the decimal number of the hex string', () => {
        expect(hexToDec('1')).toStrictEqual(1);
        expect(hexToDec('a')).toStrictEqual(10);
        expect(hexToDec('10')).toStrictEqual(16);
        expect(hexToDec('FF')).toStrictEqual(255);
        expect(hexToDec('-C')).toStrictEqual(-12);
    });
});