const dashatize = require('./index');

describe('dashatize', function(){
    it('should return a string', () => {
        expect(typeof dashatize(274)).toBe('string');
    });
    it('should return', () => {
        expect(dashatize(274)).toEqual('2-7-4');
        expect(dashatize(5311)).toEqual('5-3-1-1');
        expect(dashatize(6815)).toEqual('68-1-5');
        expect(dashatize(86320)).toEqual('86-3-20');
        expect(dashatize(974302)).toEqual('9-7-4-3-02');
    });
});