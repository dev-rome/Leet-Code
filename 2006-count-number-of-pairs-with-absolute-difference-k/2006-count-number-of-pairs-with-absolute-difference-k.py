class Solution:
    def countKDifference(self, nums: List[int], k: int) -> int:
        count = 0
        n = len(nums)
        
        for i in range(n):
            for j in range(n):
                if i < j and abs(nums[i] - nums[j]) == k:
                    count += 1
                    
        return count