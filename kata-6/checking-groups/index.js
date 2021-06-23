// In English and programming, groups can be made using symbols such as () and {} that change meaning.
// However, these groups must be closed in the correct order to maintain correct syntax.
//
// Your job in this kata will be to make a program that checks a string for correct grouping.
// For instance, the following groups are done correctly:
//
// ({})
// [[]()]
// [{()}]
// The next are done incorrectly:
//
// {(})
// ([]
// [])
// A correct string cannot close groups in the wrong order, open a group but fail to close it,
// or close a group before it is opened.
//
// Your function will take an input string that may contain any of the symbols (), {} or [] to create groups.
//
// It should return True if the string is empty or otherwise grouped correctly,
// or False if it is grouped incorrectly.





function groupCheck(s){
    let re = /\(\)|\{\}|\[\]/;
    return re.test(s) ? groupCheck(s.replace(re, '')) : '' === s;
}

// next best solution without regex
//  function groupCheck(s){
//    let expect = [], mapping = {'{':'}', '(':')', '[':']'};
//    for (let c of s) {
//      if (c in mapping) expect.push(mapping[c])
//      else if (c == expect.slice(-1)) expect.pop();
//      else return false;
//    }
//    return expect.length == 0;
//  }

module.exports = groupCheck;