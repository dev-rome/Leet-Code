class Solution:
    def numIdenticalPairs(self, nums: List[int]) -> int:
        count = 0
        freq_count = {}
        for num in nums:
            if num in freq_count:
                freq_count[num] += 1
                count += freq_count[num]
            else:
                freq_count[num] = 0
        return count
            