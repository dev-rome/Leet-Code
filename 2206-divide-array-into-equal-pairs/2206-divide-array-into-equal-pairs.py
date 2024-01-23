class Solution:
    def divideArray(self, nums: List[int]) -> bool:
        count = {}
        pairs = 0
        for num in nums:
            count[num] = count.get(num, 0) + 1
        
        for value in count.values():
            if value % 2 != 0:
                return False
            
        return True