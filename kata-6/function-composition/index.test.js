const compose = require('./index');

describe('compose', function(){
    let add1 = function(a){ return a + 1 };
    let id = function(a){ return a };
    it('should return a number', () => {
        expect(typeof compose(add1, id)(0)).toBe('number');
    });
    it('should return', () => {
        expect(compose(add1, id)(0)).toEqual(1);
    });
});