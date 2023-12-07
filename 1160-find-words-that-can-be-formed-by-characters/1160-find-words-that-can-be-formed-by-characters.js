/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    let sum = 0;
    const charCount = countFreq(chars);
    
    for(const word of words) {
        const charWord = countFreq(word)
        if(formWord(charWord, charCount)) {
            sum += word.length;
        }
    }
    return sum;
    
    function countFreq(str) {
        const charMap = new Map();
        for(const letter of str) {
            charMap.set(letter, (charMap.get(letter) || 0) + 1);
        }
        return charMap;
    }
    
    function formWord(word, char) {
        for(const [letter, count] of word) {
            if(!char.has(letter) || char.get(letter) < count) {
                return false;
            }
        }
        return true;
    }
};