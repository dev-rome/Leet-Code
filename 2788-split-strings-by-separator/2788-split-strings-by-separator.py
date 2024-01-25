class Solution:
    def splitWordsBySeparator(self, words: List[str], separator: str) -> List[str]:
        results = []
        for word in words:
            for letter in word.split(separator):
                if letter:
                    results.append(letter)
        return results