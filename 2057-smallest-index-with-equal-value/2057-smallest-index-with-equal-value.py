class Solution:
    def smallestEqual(self, nums: List[int]) -> int:
        n = len(nums)
        for i, num in enumerate(nums):
            if i % 10 == num:
                return i
        return -1
                