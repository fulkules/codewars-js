const anagrams = require('./index');

describe('anagrams', function() {
    it('should return an array with the anagrams', function() {
      expect(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])).toStrictEqual(['aabb', 'bbaa']);
      expect(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])).toStrictEqual(['carer', 'racer']);
      expect(anagrams('laser', ['lazing', 'lazy',  'lacer'])).toStrictEqual([]);
    });
  });