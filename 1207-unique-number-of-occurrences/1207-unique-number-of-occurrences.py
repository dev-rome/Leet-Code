class Solution:
    def uniqueOccurrences(self, arr: List[int]) -> bool:
        count_dict = {}
        for num in arr:
            count_dict[num] = count_dict.get(num, 0) + 1
                
        results = len(count_dict.values()) == len(set(count_dict.values()))
        
        return results