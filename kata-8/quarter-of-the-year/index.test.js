const quarterOf = require('./index');

describe('quarterOf', function(){
    it('should return a number', () => {
        expect(typeof quarterOf(3)).toStrictEqual('number');
    });
    it('should return the quarter of the year in which the given month falls', () => {
        expect(quarterOf(3)).toStrictEqual(1);
        expect(quarterOf(8)).toStrictEqual(3);
        expect(quarterOf(11)).toStrictEqual(4);
        expect(quarterOf(5)).toStrictEqual(2);
    });
});