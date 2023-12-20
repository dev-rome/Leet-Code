class Solution(object):
    def containsDuplicate(self, nums):
        freq_count = {}
        for i in range(len(nums)):
          freq_count[nums[i]] = freq_count.get(nums[i], 0) + 1
        
        for key in freq_count.keys():
            if freq_count[key] > 1:
                return True
            
        return False
        
        