class Solution:
    def maximizeSum(self, nums: List[int], k: int) -> int:
        count = 0
        nums.sort()
        for _ in range(k):
            count += nums[-1]
            nums[-1] += 1
        return count