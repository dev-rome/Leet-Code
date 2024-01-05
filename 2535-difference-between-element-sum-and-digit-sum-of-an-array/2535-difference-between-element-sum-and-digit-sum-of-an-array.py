class Solution:
    def differenceOfSum(self, nums: List[int]) -> int:
        def digit_sum(num):
            return sum(int(digit) for digit in str(num) if digit.isdigit())
        
        element_sum = sum(nums)
        digit_sum = sum(digit_sum(num) for num in nums)
        
        return abs(element_sum - digit_sum)
        