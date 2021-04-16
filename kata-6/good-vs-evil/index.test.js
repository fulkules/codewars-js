const goodVsEvil = require('./index');

describe('goodVsEvil', function(){
    it('should return a string', () => {
        expect(typeof goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1')).toBe('string');
    });
    it('should return ', () => {
        expect(goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1')).toStrictEqual('Battle Result: Evil eradicates all trace of Good');
        expect(goodVsEvil('1 0 0 0 0 0', '0 1 0 0 0 0 0')).toStrictEqual('Battle Result: Evil eradicates all trace of Good');
        expect(goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0')).toStrictEqual('Battle Result: Good triumphs over Evil');
        expect(goodVsEvil('0 0 1 0 0 0', '0 1 0 0 0 0 0')).toStrictEqual('Battle Result: Good triumphs over Evil');
        expect(goodVsEvil('1 0 0 0 0 0', '1 0 0 0 0 0 0')).toStrictEqual('Battle Result: No victor on this battle field');
        expect(goodVsEvil('0 0 1 1 1 0', '0 0 0 0 0 0 1')).toStrictEqual('Battle Result: No victor on this battle field');
    });
});