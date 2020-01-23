const findShort = require('./index');

describe(findShort, () => {
    it ('should return the length of the shortest word(s) in a given string', () => {
        expect(findShort("bitcoin take over the world maybe who knows perhaps")).toStrictEqual(3);
        expect(findShort("turns out random test cases are easier than writing out basic ones")).toStrictEqual(3);
        expect(findShort("polish sausage Ditka da Bears")).toStrictEqual(2);
    })
})