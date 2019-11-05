const dirReduc = require('./index');

describe('dirReduc', function() {
    it('should optimize the minimal path', function() {
      expect(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])).toStrictEqual(["WEST"]);
      expect(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"])).toStrictEqual(["NORTH", "WEST", "SOUTH", "EAST"]);
      expect(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"])).toStrictEqual([]);
    });
  });