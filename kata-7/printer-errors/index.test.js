const printerError = require('./index');

describe(printerError, () => {
    it ('should return convert all but last 4 characters in a string into #', () => {
        expect(printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz")).toStrictEqual("3/56");
        expect(printerError("aaabbbbhaijjjm")).toStrictEqual("0/14");
        expect(printerError("aaaxbbbbyyhwawiwjjjwwm")).toStrictEqual("8/22");
    });
})