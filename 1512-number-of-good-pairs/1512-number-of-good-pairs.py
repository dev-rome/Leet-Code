class Solution:
    def numIdenticalPairs(self, nums: List[int]) -> int:
        count = 0
        freq_count = {}
        for num in nums:
            if num in freq_count:
                count += freq_count[num]
                freq_count[num] += 1
            else:
                freq_count[num] = 1
        return count
            