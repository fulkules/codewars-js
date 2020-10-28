const feast = require('./index');

describe('feast', function() {
    it('should return a boolean', function() {
        expect(typeof feast('brown bear', 'bear claw')).toBe('boolean');
    });
    test('returns boolean indicating if the animal brought a dish with the same first and last letters as its name', function() {
        expect(feast('brown bear', 'bear claw')).toBe(false);
        expect(feast('great blue heron', 'garlic nann')).toBe(true);
    });
});