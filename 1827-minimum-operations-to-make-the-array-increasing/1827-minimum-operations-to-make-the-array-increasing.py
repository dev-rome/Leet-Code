class Solution:
    def minOperations(self, nums: List[int]) -> int:
        n = len(nums)
        min_count = 0
        for i in range(1, n):
            if nums[i] <= nums[i - 1]:
                min_count += (nums[i - 1] - nums[i] + 1)
                nums[i] = max(nums[i-1]+1, nums[i])
        return min_count