//write a function that takes a string as argument and returns the number of vowels contained in that string

function noOfVowels(str) {
    str = str.toLowerCase();
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    str.split('').forEach(c => {
        if(vowels.includes(c)) count++;
    });
    return count;
}

function noOfVowels2(str) {
    const matches = str.match('/[aeiou]/gi');
    return matches ? matches.length : 0;
}

console.log("test1: ", noOfVowels('hello'));
console.log("test2: ", noOfVowels('why'));