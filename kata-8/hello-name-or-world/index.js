// Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).
//
//     Examples:
//
// hello "john"   => "Hello, John!"
// hello "aliCE"  => "Hello, Alice!"
// hello          => "Hello, World!" # name not given
// hello ""       => "Hello, World!" # name is an empty String



function hello(name){
    if(!name) return 'Hello, World!';
    let formatted = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    return `Hello, ${formatted}!`;
}

// best practice
// const hello = s =>
//   `Hello, ${s ? (s[0].toUpperCase() + s.slice(1).toLowerCase()) : 'World'}!`;

module.exports = hello;