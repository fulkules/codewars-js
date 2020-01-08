const abbrevName = require('./index');

describe('abbrevName', function() {
    test('returns a string with the first and last name initials separated by a period', function() {
        expect(abbrevName("Michael Jordan")).toStrictEqual("M.J");
        expect(abbrevName("Larry Bird")).toStrictEqual("L.B");
        expect(abbrevName("Charles Barkley")).toStrictEqual("C.B");
    });
})