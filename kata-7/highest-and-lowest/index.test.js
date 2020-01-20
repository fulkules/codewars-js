const highAndLow = require('./index');

describe(highAndLow, () => {
    it ('should return a new string with the highest value then lowest', () => {
        expect(highAndLow("1 2 3 4 5")).toStrictEqual("5 1");
        expect(highAndLow("1 9 3 4 -5")).toStrictEqual("9 -5");
        expect(highAndLow("1 2 -3 4 5")).toStrictEqual("5 -3");
    })
})