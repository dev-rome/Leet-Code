class Solution:
    def sumOfSquares(self, nums: List[int]) -> int:
        sum_squares = 0
        n = len(nums)
        for i in range(1, n + 1):
            if n % i == 0:
                square_num = nums[i - 1] ** 2
                sum_squares += square_num
        return sum_squares