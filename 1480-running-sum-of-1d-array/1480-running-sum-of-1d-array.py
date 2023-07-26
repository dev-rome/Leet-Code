class Solution:
    def runningSum(self, nums: List[int]) -> List[int]:
        arr = []
        sum = 0
        for num in nums:
            sum += num
            arr.append(sum)
        return arr
            