class Solution:
    def sumOddLengthSubarrays(self, arr: List[int]) -> int:
        total = 0
        l = len(arr)
        for i in range(l):
            for j in range(i, l, 2):
                total = total + sum(arr[i:j+1])
                
        return total
                