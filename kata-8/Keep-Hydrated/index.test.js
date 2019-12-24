const litres = require('./index');

describe('litres', function() {
    it('should return a string from a given number', function() {
        expect(litres(0)).toStrictEqual(0);
        expect(litres(1.4)).toStrictEqual(0);
        expect(litres(2)).toStrictEqual(1);
        expect(litres(12.3)).toStrictEqual(6);
        expect(litres(1787)).toStrictEqual(893);
    });
})