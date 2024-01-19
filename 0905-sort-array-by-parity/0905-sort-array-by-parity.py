class Solution:
    def sortArrayByParity(self, nums: List[int]) -> List[int]:
        even_num = []
        odd_num = []
        
        for num in nums:
            if num % 2 == 0:
                even_num.append(num)
            else:
                odd_num.append(num)
                
        return even_num + odd_num