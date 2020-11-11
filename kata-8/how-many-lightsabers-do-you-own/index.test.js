const howManyLightsabersDoYouOwn = require('./index');

describe(howManyLightsabersDoYouOwn, () => {
    it('should return a number', () => {
        expect(typeof (howManyLightsabersDoYouOwn([9, 10, 19, 13, 19, 13]))).toBe('number');
    });
    it('should return the number of lightsabers owned', () => {
        expect(howManyLightsabersDoYouOwn('Zach')).toStrictEqual(18);
        expect(howManyLightsabersDoYouOwn('Adam')).toStrictEqual(0);
    });
});
