class Solution:
    def checkAlmostEquivalent(self, word1: str, word2: str) -> bool:
        if len(word1) != len(word2): return False
        word_count1 = {}
        word_count2 = {}
        
        for letter in word1:
            word_count1[letter] = word_count1.get(letter, 0) + 1
            
        for letter in word2:
            word_count2[letter] = word_count2.get(letter, 0) + 1
         
        for char in 'abcdefghijklmnopqrstuvwxyz':
            count1 = word_count1.get(char, 0)
            count2 = word_count2.get(char, 0)
            
            if abs(count1 - count2) > 3:
                return False
        
        return True