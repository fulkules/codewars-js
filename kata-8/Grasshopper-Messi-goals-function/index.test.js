const goals = require('./index');

describe(goals, () => {
    it ('should return ', () => {
        expect(goals(0,0,0)).toStrictEqual(0);
        expect(goals(43,10,5)).toStrictEqual(58);
        expect(goals(3,7,13)).toStrictEqual(23);
    })
})