class Solution:
    def findDifference(self, nums1: List[int], nums2: List[int]) -> List[List[int]]:
        set1 = set(nums1)
        set2 = set(nums2)    
        answer1 = list(set1.difference(set2))
        answer2 = list(set2.difference(set1))
        
        return [answer1, answer2]