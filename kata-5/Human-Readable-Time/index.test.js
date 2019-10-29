const formatTime = require('./index');

describe('formatTime', function() {
    it('should format correctly', function() {
      expect(formatTime(0)).toStrictEqual('00:00:00');
      expect(formatTime(5)).toStrictEqual('00:00:05');
      expect(formatTime(60)).toStrictEqual('00:01:00');
      expect(formatTime(86399)).toStrictEqual('23:59:59');
      expect(formatTime(359999)).toStrictEqual('99:59:59');
    });
  });