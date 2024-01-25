class Solution:
    def kthDistinct(self, arr: List[str], k: int) -> str:
        freq_count = {}
        distinct = []
        
        for string in arr:
            if string not in freq_count:
                freq_count[string] = 1
                distinct.append(string)
            else:
                freq_count[string] += 1
                
        for string in distinct:
            if freq_count[string] == 1:
                k -= 1
                if k == 0:
                    return string
        
        return ""
            