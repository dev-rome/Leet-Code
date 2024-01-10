class Solution:
    def isAcronym(self, words: List[str], s: str) -> bool:
        str = ""
        for letter in words:
            str += letter[0:1]
        return str == s