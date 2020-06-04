const number = require('./index');

describe(number, () => {
    test ('test 1', () => {
        expect(number([[10,0],[3,5],[5,8]])).toStrictEqual(5);
        expect(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]])).toStrictEqual(17);
        expect(number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]])).toStrictEqual(21);
    })
});