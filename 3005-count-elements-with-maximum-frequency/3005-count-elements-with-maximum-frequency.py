class Solution:
    def maxFrequencyElements(self, nums: List[int]) -> int:
        freq_count = {}
        for num in nums:
            freq_count[num] = freq_count.get(num, 0) + 1
            
        max_freq = max(freq_count.values())
        total = sum(value for value in freq_count.values() if value == max_freq)
        return total        