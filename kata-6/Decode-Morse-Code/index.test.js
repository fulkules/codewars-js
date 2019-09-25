const decode = require('./index');

test ('Test 1', () => {
    expect(decode(".... . -.--   .--- ..- -.. .")).toStrictEqual('HEY JUDE');
});