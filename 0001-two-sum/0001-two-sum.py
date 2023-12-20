class Solution(object):
    def twoSum(self, nums, target):
        dict_num = {}
        for index, value in enumerate(nums):
            output = target - value
            if output in dict_num:
                return [dict_num[output], index]
            dict_num[value] = index
        print(dict_num)
        