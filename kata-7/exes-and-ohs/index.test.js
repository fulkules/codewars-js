const XO = require('./index');

describe(XO, () => {
    it ('should return a boolean of whether or not the string has same amount of x and o', () => {
        expect(XO("xo")).toStrictEqual(true);
        expect(XO("xxOo")).toStrictEqual(true);
        expect(XO("zoom")).toStrictEqual(false);
        expect(XO("abcdefg")).toStrictEqual(true);
        expect(XO("xXxoO")).toStrictEqual(false);
    })
})