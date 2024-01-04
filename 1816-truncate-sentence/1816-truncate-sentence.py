class Solution:
    def truncateSentence(self, s: str, k: int) -> str:
        s_arr = s.split()
        slice_arr = s_arr[:k]
        return " ".join(slice_arr)