const sortByLength = require('./index');

describe(sortByLength, () => {
    test('should return an array strings sorted by length', () => {
        expect(sortByLength(["Beg", "Life", "I", "To"])).toStrictEqual(["I", "To", "Beg", "Life"]);
        expect(sortByLength(["Beg", "Life", "I", "To"])).toStrictEqual(["I", "To", "Beg", "Life"]);
        expect(sortByLength(["", "Moderately", "Brains", "Pizza"])).toStrictEqual(["", "Pizza", "Brains", "Moderately"]);
    });
});