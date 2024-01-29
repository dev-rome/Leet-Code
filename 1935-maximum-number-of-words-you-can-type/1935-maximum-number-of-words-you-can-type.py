class Solution:
    def canBeTypedWords(self, text: str, brokenLetters: str) -> int:
        str_set = set(brokenLetters)
        arr = text.split()
        count = 0
        for word in arr:
            if not any(letter in str_set for letter in word):
                count += 1
        return count