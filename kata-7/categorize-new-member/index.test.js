const openOrSenior = require('./index');

describe(openOrSenior, () => {
    test('should return "senior" if data shows age over 55 and handicap over 7, otherwise return "open"', () => {
        expect(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]])).toStrictEqual(['Open', 'Senior', 'Open', 'Senior']);
        expect(openOrSenior([[3, 12],[55,1],[91, -2],[54, 23]])).toStrictEqual(['Open', 'Open', 'Open', 'Open']);
        expect(openOrSenior([[59, 12],[55,-1],[12, -2],[12, 12]])).toStrictEqual(['Senior', 'Open', 'Open', 'Open']);
    })
})