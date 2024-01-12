class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        sort_nums = sorted(nums)
        return (sort_nums[-2] - 1) * (sort_nums[-1] - 1)