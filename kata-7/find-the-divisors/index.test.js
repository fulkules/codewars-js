const divisors = require('./index');

describe(divisors, () => {
    test ('test 1', () => {
        expect(divisors(15)).toStrictEqual([3,5]);
        expect(divisors(12)).toStrictEqual([2,3,4,6]);
        expect(divisors(25)).toStrictEqual([5]);
        expect(divisors(13)).toStrictEqual("13 is prime");
    })
});