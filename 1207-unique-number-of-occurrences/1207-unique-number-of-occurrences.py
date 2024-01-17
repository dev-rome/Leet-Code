class Solution:
    def uniqueOccurrences(self, arr: List[int]) -> bool:
        count_dict = {}
        for num in arr:
            if num in count_dict:
                count_dict[num] += 1
            else:
                count_dict[num] = 1
                
        results = len(count_dict.values()) == len(set(count_dict.values()))
        
        return results