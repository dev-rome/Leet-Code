class Solution:
    def firstPalindrome(self, words: List[str]) -> str:
        s = ""
        for word in words:
            reverse_word = word[::-1]
            if word == reverse_word:
                s = word
                break
        return s