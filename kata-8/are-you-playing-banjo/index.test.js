const areYouPlayingBanjo = require('./index');

describe(areYouPlayingBanjo, () => {
    test('names beginning with R or r play the banjo', () => {
        expect(areYouPlayingBanjo('Rori')).toStrictEqual('Rori plays banjo');
        expect(areYouPlayingBanjo('Jade')).toStrictEqual('Jade does not play banjo');
        expect(areYouPlayingBanjo('Scarlet')).toStrictEqual('Scarlet does not play banjo');
        expect(areYouPlayingBanjo('Mick')).toStrictEqual('Mick does not play banjo');
    })
})