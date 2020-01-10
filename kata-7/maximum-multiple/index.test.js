const maxMultiple = require('./index');

describe(maxMultiple, () => {
    it ('should find the maximum multiple', () => {
        expect(maxMultiple(2,7)).toStrictEqual(6);
        expect(maxMultiple(3,10)).toStrictEqual(9);
        expect(maxMultiple(7,17)).toStrictEqual(14);
    })
})