class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        freq_dict = {}
        
        for num in nums:
            freq_dict[num] = freq_dict.get(num, 0) + 1
            
        for k, v in freq_dict.items():
            if v == 1:
                return k
            
        