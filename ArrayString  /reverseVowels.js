/** 345. Reverse Vowels of a String
Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 

Example 1:
Input: s = "IceCreAm"

Output: "AceCreIm"

Explanation:

The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".

Example 2:
Input: s = "leetcode"

Output: "leotcede"

*/

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels2 = function(s) {
    function isVowel(c) {
        return c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u' || c == 'A' || c == 'E' || c == 'I' || c == 'O' || c == 'U'
    }

    let queue = [];
    let result = []

    for(let char of s) {
        if( isVowel(char) ) {
            queue.push(char)
        }
    }
    
    for(let char of s) {
        if( isVowel(char) ) {
            result.push(queue.pop())            
        } else {
            result.push(char)
        }
    }

    
    return result.join('')
};

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    function isVowel(c) {
        return c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u' || c == 'A' || c == 'E' || c == 'I' || c == 'O' || c == 'U'
    }

    let result = s.split('')
    let b = 0;
    let t = result.length - 1;

    while( b < t ) {
        if( isVowel(result[b]) && isVowel(result[t]) ) {
            let temp = result[b];
            result[b] = result[t];
            result[t] = temp;
            b++;
            t--;
        } else
        if( !isVowel(result[b]) && !isVowel(result[t]) ) {
            b++
            t--;
        } else if( isVowel(result[b]) ) {
            t--;
        } else {
            b++;
        } 
    }

    return result.join('')
};

reverseVowels("IceCreAm");