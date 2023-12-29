class Solution:
    def leftRightDifference(self, nums: List[int]) -> List[int]:
        n = len(nums)
        left_sum = [0] * n
        current_sum = 0
        for i in range(n - 1):
            current_sum += nums[i]
            left_sum[i + 1] = current_sum
            
        right_sum = [0] * n
        current_sum = 0
        for i in range(n - 1, 0, -1):
            current_sum += nums[i]
            right_sum[i - 1] = current_sum
        
        return [abs(left_sum[i] - right_sum[i]) for i in range(len(nums))]