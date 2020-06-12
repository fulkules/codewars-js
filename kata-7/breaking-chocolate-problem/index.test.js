const breakChocolate = require('./index');

describe(breakChocolate, () => {
    test ('test 1', () => {
        expect(breakChocolate(5, 5)).toStrictEqual(24);
        expect(breakChocolate(1, 1)).toStrictEqual(0);
        expect(breakChocolate(2, 1)).toStrictEqual(1);
        expect(breakChocolate(0, 0)).toStrictEqual(0);
    })
});