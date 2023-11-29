/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    let morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    let set = new Set();
    for(let word of words) {
        let str = "";
        for(let letter of word) {
            let index = letter.charCodeAt(0) - 97
            str += morse[index];
        }
        set.add(str);
    }
    return set.size;
};