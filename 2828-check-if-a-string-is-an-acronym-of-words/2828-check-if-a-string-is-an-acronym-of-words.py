class Solution:
    def isAcronym(self, words: List[str], s: str) -> bool:
        str = "".join(letter[0] for letter in words)
        return str == s