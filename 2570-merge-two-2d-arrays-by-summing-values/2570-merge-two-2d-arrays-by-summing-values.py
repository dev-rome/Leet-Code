class Solution:
    def mergeArrays(self, nums1: List[List[int]], nums2: List[List[int]]) -> List[List[int]]:
        dict_count = {}
        arr = nums1 + nums2
        for num, value in arr:
            if num not in dict_count:
                dict_count[num] = value
            else:
                dict_count[num] += value
                
        results = [(k, v) for k, v in dict_count.items()]
        return sorted(results)