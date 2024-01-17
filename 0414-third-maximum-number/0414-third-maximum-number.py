class Solution:
    def thirdMax(self, nums: List[int]) -> int:
        unique_list = list(set(nums))
        unique_list.sort(reverse=True)
        slice_list = unique_list[:3]
        if(len(slice_list) != 3):
            return max(slice_list)
        return slice_list[-1]
                
        
        
                