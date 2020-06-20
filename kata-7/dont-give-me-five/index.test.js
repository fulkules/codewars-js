const dontGiveMeFive = require('./index');

describe(dontGiveMeFive, () => {
    test('test 1', () => {
        expect(dontGiveMeFive(1,9)).toStrictEqual(8);
        expect(dontGiveMeFive(4, 17)).toStrictEqual(12);
    })
});