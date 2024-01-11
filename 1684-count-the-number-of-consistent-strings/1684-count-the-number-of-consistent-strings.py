class Solution:
    def countConsistentStrings(self, allowed: str, words: List[str]) -> int:
        return sum(all(letters in allowed for letters in word) for word in words)