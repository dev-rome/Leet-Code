class Solution:
    def arithmeticTriplets(self, nums: List[int], diff: int) -> int:
        count = 0
        n = len(nums)
        for i in range(n):
            for j in range(n):
                for k in range(n):
                    if i < j and j < k:
                        if nums[j] - nums[i] == diff and nums[k] - nums[j] == diff:
                            count += 1
        return count