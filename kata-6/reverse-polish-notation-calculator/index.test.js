const calc = require('./index');

describe('calc', function () {
    it('should return a number', function () {
        expect(typeof calc("3")).toBe('number');
    });

    it('should work with empty string', function () {
        expect(calc('')).toStrictEqual(0);
    });

    it('should parse numbers', function () {
        expect(calc('3')).toStrictEqual(3);
    });

    it('should parse float numbers', function () {
        expect(calc('3.5')).toStrictEqual(3.5);
    });

    it('should support math functions', function () {
        expect(calc('1 3 +')).toStrictEqual(4);
        expect(calc('1 3 *')).toStrictEqual(3);
        expect(calc('1 3 -')).toStrictEqual(-2);
        expect(calc('4 2 /')).toStrictEqual(2);
        expect(calc('3 4 5 * -')).toStrictEqual(-17);
        expect(calc('5 1 2 + 4 * + 3 -')).toStrictEqual(14);
    });
});