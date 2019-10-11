const longestConsec = require('./index');

test('Test 1', () => {
    expect(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"],2)).toStrictEqual("abigailtheta");
});
test('Test 2', () => {
    expect(longestConsec([], 3)).toStrictEqual("");
});
test('Test 3', () => {
    expect(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2)).toStrictEqual("");
});
test('Test 4', () => {
    expect(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3)).toStrictEqual("ixoyx3452zzzzzzzzzzzz");
});