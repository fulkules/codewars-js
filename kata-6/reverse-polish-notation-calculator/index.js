// Your job is to create a calculator which evaluates expressions in Reverse Polish notation.
//
// For example expression 5 1 2 + 4 * + 3 - (which is equivalent to 5 + ((1 + 2) * 4) - 3 in normal notation) should evaluate to 14.
//
// For your convenience, the input is formatted such that a space is provided between every token.
//
// Empty expression should evaluate to 0.
//
// Valid operations are +, -, *, /.
//
// You may assume that there won't be exceptional situations (like stack underflow or division by zero).

// fn(str) => num
// format the expr and create empty array to add the numbers
// check expr is empty before iterating
// iterate expr and push nums into stack array
    // once out of numbers, you reach operators, pop out last 2 nums and perform operations
// add the result to stack
// if stack has more than one number and we are out of operators, throw error, else return the result

function calc(expr){
    if(!expr) return 0;
    let exprArr = expr.split(' '), stack = [];
    if(exprArr.length === 1) return Number(expr);
    for(let i = 0; i < exprArr.length; i++){
        if(!isNaN(exprArr[i])){
            stack.push(exprArr[i]);
        } else {
            let a = stack.pop();
            let b = stack.pop();

            switch(exprArr[i]){
                case '+':
                    stack.push(parseInt(a) + parseInt(b));
                    break;
                case '-':
                    stack.push(parseInt(b) - parseInt(a));
                    break;
                case '*':
                    stack.push(parseInt(a) * parseInt(b));
                    break;
                case '/':
                    stack.push(parseInt(b) / parseInt(a));
                    break;
                default:
                    break;
            }
        }
    }
    return stack[0];
}

// voted best practice
// function calc(expr) {
//   var result = [];
//   var atoms = expr.split(/\s+/);
//   var operators = ['+', '-', '*', '/'];
//   for (var i=0; i<atoms.length; i++) {
//     switch(atoms[i]) {
//       case '+': result.push(result.pop() + result.pop()); break;
//       case '-': result.push(-result.pop() + result.pop()); break;
//       case '*': result.push(result.pop() * result.pop()); break;
//       case '/': result.push(1 /(result.pop() / result.pop())); break;
//       default: result.push(parseFloat(atoms[i]));
//     }
//   }
//   return result.pop() || 0;
// }

// good alternate solution
// var operands = {
//   '+': function (b, a) { return a + b;},
//   '-': function (b, a) { return a - b;},
//   '*': function (b, a) { return a * b;},
//   '/': function (b, a) { return a / b;}
// };
//
// function calc(expr) {
//   expr = expr || '0';
//   return +expr.split(/\s/g).reduce(function (stack, current) {
//       stack.push(operands[current] ? operands[current](+stack.pop(), +stack.pop()) : current);
//     return stack;
//   }, []).pop();
// }

module.exports = calc;