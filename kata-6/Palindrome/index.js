function palindrome(str) {
    // make all letters lowercase and remove non-alphanumeric characters
      str = str.toLowerCase().replace(/[^a-z|1-9]/g, "");
    
      // if the length of the string is 0 then it is a palindrome
      if (str.length === 0){
        return true;
      }
      // if the first letter and the last letter of the string
      // do not equal each other, then it is not a palindrome
      if (str[0] !== str[str.length-1]){
        return false;
      }
      //Else, run the function without the first and last characters.
      else{
        return palindrome(str.slice(1,str.length - 1));
      }
    }

module.exports = palindrome;