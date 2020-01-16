const isSquare = require('./index');

describe(isSquare, () => {
    it ('should return a boolean whether or not the number of blocks can make a perfect square', () => {
        expect(isSquare(-1)).toStrictEqual(false);
        expect(isSquare(0)).toStrictEqual(true);
        expect(isSquare(3)).toStrictEqual(false);
        expect(isSquare(4)).toStrictEqual(true);
        expect(isSquare(25)).toStrictEqual(true);
        expect(isSquare(26)).toStrictEqual(false);
    })
})