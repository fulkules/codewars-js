const formatNames = require('./index');

test("Test 1", () => {
    expect(formatNames([{name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'}])).toStrictEqual("Bart, Lisa & Maggie");
});
test("Test 2", () => {
    expect(formatNames([{name: 'Arnold'}])).toStrictEqual("Arnold");
});
test("Test 3", () => {
    expect(formatNames([{name: 'Tony'}, {name: 'Steve'}, {name: 'Bruce'}, {name: 'Scott'}, {name: 'Clint'}, {name: 'Natasha'}, {name: 'Peter'}, {name: 'Carol'}])).toStrictEqual("Tony, Steve, Bruce, Scott, Clint, Natasha, Peter & Carol");
});