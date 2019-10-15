const inArray = require('./index');

test('Test 1', () => {
    expect(inArray(['arp', 'live', 'strong'],['lively', 'alive', 'harp', 'sharp', 'armstrong'])).toStrictEqual(['arp', 'live', 'strong'])
})
test('Test 2', () => {
    expect(inArray(['tarp', 'mice', 'bull'],['lively', 'alive', 'harp', 'sharp', 'armstrong'])).toStrictEqual([]);
})