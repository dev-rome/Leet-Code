class Solution:
    def sumOfUnique(self, nums: List[int]) -> int:
        freq_dict = {}
        count = 0
        for num in nums:
            freq_dict[num] = freq_dict.get(num, 0) + 1
            
        for num in nums:
            if freq_dict[num] == 1:
                count += num
        return count