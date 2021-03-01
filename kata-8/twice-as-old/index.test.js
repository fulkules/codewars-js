const twiceAsOld = require('./index');

describe(twiceAsOld, () => {
    it('should return a number', () => {
        expect(typeof twiceAsOld(36, 7)).toBe('number');
    });
    it('Should return how many years ago the father was twice as old as his son', () => {
        expect(twiceAsOld(36, 7)).toStrictEqual(22);
        expect(twiceAsOld(55, 30)).toStrictEqual(5);
        expect(twiceAsOld(22, 1)).toStrictEqual(20);
        expect(twiceAsOld(29, 0)).toStrictEqual(29);
    });
});