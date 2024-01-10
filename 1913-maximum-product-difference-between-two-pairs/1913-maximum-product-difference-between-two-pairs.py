class Solution:
    def maxProductDifference(self, nums: List[int]) -> int:
        sort_nums = sorted(nums)
        return (sort_nums[-1] * sort_nums[-2]) - (sort_nums[0] * sort_nums[1])
            