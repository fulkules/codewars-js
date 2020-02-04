const bonusTime = require('./index');

describe(bonusTime, () => {
    it ('should return salary times 10 if second arg is truthy', () => {
        expect(bonusTime(10000, true)).toStrictEqual('£100000');
        expect(bonusTime(25000, true)).toStrictEqual('£250000');
        expect(bonusTime(10000, false)).toStrictEqual('£10000');
    })
})