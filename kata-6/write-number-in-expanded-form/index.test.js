const expandedForm = require('./index');

describe('expandedForm', function(){
    it('should return a string', () => {
        expect(typeof expandedForm(70304)).toBe('string');
    });
    it('should return the given number in expanded form', () => {
        expect(expandedForm(70304)).toStrictEqual('70000 + 300 + 4');
        expect(expandedForm(13)).toStrictEqual('10 + 3');
        expect(expandedForm(33)).toStrictEqual('30 + 3');
        expect(expandedForm(9000000)).toStrictEqual('9000000');
        expect(expandedForm(28755040)).toStrictEqual('20000000 + 8000000 + 700000 + 50000 + 5000 + 40');
    });
});