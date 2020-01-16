const accum = require('./index');

describe(accum, () => {
    test ('test 1', () => {
        expect(accum('abcd')).toStrictEqual('A-Bb-Ccc-Dddd');
        expect(accum('RqaEzty')).toStrictEqual('R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy');
        expect(accum('cwAt')).toStrictEqual('C-Ww-Aaa-Tttt');
    })
})