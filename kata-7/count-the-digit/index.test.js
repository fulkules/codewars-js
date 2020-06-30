const nbDig = require('./index');

describe(nbDig, () => {
    test('test 1', () => {
        expect(nbDig(5750, 0)).toStrictEqual(4700);
        expect(nbDig(11011, 2)).toStrictEqual(9481);
        expect(nbDig(12224, 8)).toStrictEqual(7733);
        expect(nbDig(11549, 1)).toStrictEqual(11905);
    })
});