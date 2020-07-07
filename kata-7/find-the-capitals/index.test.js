const capitals = require('./index');

describe(capitals, () => {
    it ('should return an array of indexes of all capital letters in the string', () => {
        expect(capitals('CodEWaRs')).toStrictEqual([0,3,4,6]);
    })
});