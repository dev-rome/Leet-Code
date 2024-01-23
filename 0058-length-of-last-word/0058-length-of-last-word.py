class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        max_word = 0
        first_letter = False
        n = len(s)
        for i in range(n - 1, -1, -1):
            if first_letter and s[i] == " ":
                break
                
            if s[i] != " ":
                first_letter = True
                max_word += 1
        return max_word
                