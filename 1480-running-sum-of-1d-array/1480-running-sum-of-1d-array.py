class Solution:
    def runningSum(self, nums: List[int]) -> List[int]:
        results = []
        sum = 0
        for num in nums:
            sum += num
            results.append(sum)
        return results
        