const spread = require('./index');

describe(spread, () => {
    it('should return the result of the first arg function', () => {
        expect(spread(function(x,y){return x+y}, [1,2])).toStrictEqual(3);
    });
});