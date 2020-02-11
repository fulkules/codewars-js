const isIsogram = require('./index');

describe(isIsogram, () => {
    it ('should return a boolean value whether or not the given string is an Isogram (no repeating chars)', () => {
        expect(isIsogram("Dermatoglyphics")).toStrictEqual(true);
        expect(isIsogram("isogram")).toStrictEqual(true);
        expect(isIsogram("aba")).toStrictEqual(false);
        expect(isIsogram("moOse")).toStrictEqual(false); 
        expect(isIsogram("")).toStrictEqual(true); 
    })
})