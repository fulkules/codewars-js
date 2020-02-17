const findNextSquare = require('./index');

describe(findNextSquare, () => {
    it ('should return the next square for perfect squares', () => {
        expect(findNextSquare(121)).toStrictEqual(144);
        expect(findNextSquare(319225)).toStrictEqual(320356);
    });
    it ('should return -1 for numbers which are not perfect squares', () => {
        expect(findNextSquare(155)).toStrictEqual(-1);
        expect(findNextSquare(342786627)).toStrictEqual(-1);
    });
})