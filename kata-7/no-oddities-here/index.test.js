const noOdds = require('./index');

describe(noOdds, () => {
    test('test 1', () => {
        expect(noOdds([0,1])).toStrictEqual([0]);
        expect(noOdds([0,1,2,3])).toStrictEqual([0,2]);
    })
});