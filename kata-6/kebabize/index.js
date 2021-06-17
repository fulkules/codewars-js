// Modify the kebabize function so that it converts a camel case string into a kebab case.
//
// kebabize('camelsHaveThreeHumps') // camels-have-three-humps
// kebabize('camelsHave3Humps') // camels-have-humps
// Notes:
//
// the returned string should only contain lowercase letters


// fn(str) => str
// remove any numbers
// split the string on uppercase chars
// iterate
    // convert all to lowercase
// join with '-'
// return


function kebabize(str){
    let arr = str.replace(/[0-9]/g, '').match(/([A-Z]?[^A-Z]*)/g).slice(0,-1);
    return arr.map(s => s.toLowerCase()).join('-');
}

module.exports = kebabize;