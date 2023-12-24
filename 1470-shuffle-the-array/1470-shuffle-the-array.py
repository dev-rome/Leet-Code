class Solution:
    def shuffle(self, nums: List[int], n: int) -> List[int]:
        results = []
        i = 0
        while i < n:
            results.append(nums[i])
            results.append(nums[i + n])
            i += 1
        
        return results