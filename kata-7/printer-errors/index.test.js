const printerError = require('./index');

describe(printerError, () => {
    it ('should return a string with amount of errors over the length', () => {
        expect(printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz")).toStrictEqual("3/56");
        expect(printerError("aaabbbbhaijjjm")).toStrictEqual("0/14");
        expect(printerError("aaaxbbbbyyhwawiwjjjwwm")).toStrictEqual("8/22");
    });
})