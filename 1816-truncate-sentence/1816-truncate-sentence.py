class Solution:
    def truncateSentence(self, s: str, k: int) -> str:
        words = s.split()
        slice_sentence = " ".join(words[:k])
        return slice_sentence