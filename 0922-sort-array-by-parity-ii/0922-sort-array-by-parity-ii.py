class Solution:
    def sortArrayByParityII(self, nums: List[int]) -> List[int]:
        i = 0
        j = len(nums) - 1
    
        while i < len(nums) and j >= 0:
            while i < len(nums) and nums[i] % 2 == 0:
                i += 2

            while j >= 0 and nums[j] % 2 != 0:
                j -= 2

            if i < len(nums) and j >= 0:
                nums[i], nums[j] = nums[j], nums[i]

        return nums