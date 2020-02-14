const isTriangle = require('./index');

describe(isTriangle, () => {
    it ('should return a boolean value testing if 3 given lengths can form a triangle', () => {
        expect(isTriangle(1,2,2)).toStrictEqual(true);
        expect(isTriangle(7,2,2)).toStrictEqual(false);
    })
})