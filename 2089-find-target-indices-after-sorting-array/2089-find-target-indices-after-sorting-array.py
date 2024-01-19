class Solution:
    def targetIndices(self, nums: List[int], target: int) -> List[int]:
        nums.sort()
        n = len(nums)
        results = [i for i in range(n) if nums[i] == target]
        return results
                