class Solution:
    def replaceElements(self, arr: List[int]) -> List[int]:
        n = len(arr)
        last = -1
        for i in range(n - 1, -1, -1):
            new_max = max(last, arr[i])
            arr[i] = last
            last = new_max
        return arr