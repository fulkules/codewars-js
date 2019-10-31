const validParentheses = require('./index');

describe('validParentheses', function() {
    it('should format correctly', function() {
      expect(validParentheses("()")).toBe(true);
      expect(validParentheses(")(()))")).toBe(false);
      expect(validParentheses("(")).toBe(false);
      expect(validParentheses("(())((()())())")).toBe(true);
    //   expect(validParentheses("")).toBe(true);
    });
  });