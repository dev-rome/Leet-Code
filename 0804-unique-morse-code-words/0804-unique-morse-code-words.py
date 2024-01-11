class Solution:
    def uniqueMorseRepresentations(self, words: List[str]) -> int:
        morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
        unique_trans = set()
        
        for word in words:
            str = ""
            for letter in word:
                str += morse[ord(letter) - ord("a")]
            unique_trans.add(str)
            
        return len(unique_trans)