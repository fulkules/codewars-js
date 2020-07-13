// Complete the function/method so that it returns the url with anything after the anchor (#) removed.
//
//     Examples
// // returns 'www.codewars.com'
// removeUrlAnchor('www.codewars.com#about')
//
// // returns 'www.codewars.com?page=1'
// removeUrlAnchor('www.codewars.com?page=1')

// fn(str) => str

function removeUrlAnchor(url){
    return url.substring(0, url.indexOf('#'))? url.substring(0, url.indexOf('#')) : url;
}

// regex solution
// const removeUrlAnchor = url => url.replace(/#.*/gi, "");

// best practice
// function removeUrlAnchor(url){
//   return url.split('#')[0];
// }

module.exports = removeUrlAnchor;