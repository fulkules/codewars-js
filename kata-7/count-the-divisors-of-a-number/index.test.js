const getDivisorsCnt = require('./index');

describe(getDivisorsCnt, () => {
    it ('should return the number of divisors of a given num', () => {
        expect(getDivisorsCnt(4)).toStrictEqual(3);
        expect(getDivisorsCnt(5)).toStrictEqual(2);
        expect(getDivisorsCnt(12)).toStrictEqual(6);
        expect(getDivisorsCnt(30)).toStrictEqual(8);
    })
});