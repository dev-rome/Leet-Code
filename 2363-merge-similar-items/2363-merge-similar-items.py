class Solution:
    def mergeSimilarItems(self, items1: List[List[int]], items2: List[List[int]]) -> List[List[int]]:
        initial_dict = {}
        combine_list = [*items1, *items2]
        for (value, weight) in combine_list:
            if value in initial_dict:
                initial_dict[value] += weight
            else:
                initial_dict[value] = weight
            
        results = [(key, value) for key, value in initial_dict.items()]
        return sorted(results)