const noBoringZeros = require('./index');

describe('noBoringZeros', function(){
    it('should return a number', () => {
        expect(typeof noBoringZeros(1450)).toBe('number');
    });
    it('should return the number with no ending zeroes', () => {
        expect(noBoringZeros(1450)).toStrictEqual(145);
        expect(noBoringZeros(960000)).toStrictEqual(96);
        expect(noBoringZeros(1050)).toStrictEqual(105);
        expect(noBoringZeros(-1050)).toStrictEqual(-105);
    });
});