const _if = require('./index');

describe('_if', function() {
    it('should return a bool', function() {
        expect(typeof _if(true, function(){return true}, function(){return false})).toBe('boolean');
    });
    test('returns the result of func1 of bool is truthy, otherwwise result of func2', function() {
        expect(_if(true, function(){return true}, function(){return false})).toBe(true);
        expect(_if(false, function(){return true}, function(){return false})).toBe(false);
    });
});