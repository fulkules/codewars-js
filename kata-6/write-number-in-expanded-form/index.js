// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:
//
//     expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

// fn(num) => str

function expandedForm(num){ // 70304
    let arr = num.toString().split(''), // ['7', '0', '3', '0', '4']
        len = arr.length, // 5
        mod = [];

    arr.map((item, i) => {
        if(item !== '0'){
            let s = `${item}${'0'.repeat(len - i - 1)}`;
            mod.push(s);
        }
    });

    return mod.join(' + ');
}

// voted best practice
// const expandedForm = n => n.toString()
//                             .split("")
//                             .reverse()
//                             .map( (a, i) => a * Math.pow(10, i))
//                             .filter(a => a > 0)
//                             .reverse()
//                             .join(" + ");

module.exports = expandedForm;