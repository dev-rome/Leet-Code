class Solution:
    def maxProductDifference(self, nums: List[int]) -> int:
        sort_nums = sorted(nums)
        list_one = sort_nums[:2]
        list_two = sort_nums[-2:]
        
        return (list_two[0] * list_two[1]) - (list_one[0] * list_one[1])
            