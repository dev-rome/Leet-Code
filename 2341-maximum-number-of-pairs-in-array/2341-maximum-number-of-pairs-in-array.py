class Solution:
    def numberOfPairs(self, nums: List[int]) -> List[int]:
        feq_dict = {}
        
        for num in nums:
            feq_dict[num] = feq_dict.get(num, 0) + 1
        
        count_pairs = 0
        count_left = 0
        
        for count in feq_dict.values():
            count_pairs += count // 2
            count_left += count % 2   
            
        return [count_pairs, count_left]