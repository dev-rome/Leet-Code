class Solution:
    def leftRightDifference(self, nums: List[int]) -> List[int]:
        left_sum = [0] + [sum(nums[: i + 1]) for i in range(len(nums) - 1)]
        right_sum = [sum(nums[i + 1 :]) for i in range(len(nums))]
        
        return [abs(left_sum[i] - right_sum[i]) for i in range(len(nums))]