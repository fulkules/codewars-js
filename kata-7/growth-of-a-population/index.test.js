const nbYear = require('./index');

describe(nbYear, () => {
    it ('should determine how many years until population is greater or equal to last argument', () => {
        expect(nbYear(1500, 5, 100, 5000)).toStrictEqual(15);
        expect(nbYear(1500000, 2.5, 10000, 2000000)).toStrictEqual(10);
        expect(nbYear(1500000, 0.25, 1000, 2000000)).toStrictEqual(94);
    })
})