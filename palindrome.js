//Given a string, return true if the string is a palindrome and false if it isn’t. 
//Include spaces and punctuation in deciding if the string is a palindrome.

function isPalindrome(str) {
    // console.log('str: ', str);
    str = str.toLowerCase();
    let reversed = str.split("").reverse().join("");
    // console.log('reversed: ', reversed);
    return str === reversed;
}

let test1 = isPalindrome('RaceCar');
let test2 = isPalindrome('Table');

console.log('test1: ', test1);
console.log('test2: ', test2);