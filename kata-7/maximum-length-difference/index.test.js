const mxdiflg = require('./index');

describe(mxdiflg, () => {
    it ('should return the maximum length of any given string in arg1 minus max length in arg2', () => {
        expect(mxdiflg(
            ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"],
            ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
        )).toStrictEqual(13);
    })
});