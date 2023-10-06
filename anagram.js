//A word is an anagram of another word if both use the same letters in the same quantity, but arranged differently.
//write a function that checks if two provided strings are anagrams of each other; letter casing shouldn’t matter. Also, consider only characters, not spaces or punctuation

function isAnagram(str1, str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    let strArr1 = str1.split('');
    let strArr2 = str2.split('');
    if(str1.length != str2.length) return false;
    for(let i = 0; i < str1.length; i++) {
        let count1 = 0;
        let count2 = 0;
        if(str2.includes(str1[i])) {
            str1.split('').forEach(c => {
                if(c == str1[i]) count1++
            });
            str2.split('').forEach(c => {
                if(c == str1[i]) count2++;
            });
            if(count1 != count2) return false;
        } else {
            return false;
        }
    }
    return true;
}

console.log('test1: ', isAnagram('finder', 'Friend'));
console.log('test2: ', isAnagram('hello', 'bye'));