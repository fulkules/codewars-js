const tickets = require('./index');

test('Test 1', () => {
    expect(tickets([25,25,50])).toStrictEqual('YES');
});

test('Test 2', () => {
    expect(tickets([25,100])).toStrictEqual('NO');
});

test('Test 3', () => {
    expect(tickets([25,25,50,50,100])).toStrictEqual('NO');
});