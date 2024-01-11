class Solution:
    def largestAltitude(self, gain: List[int]) -> int:
        results = [0]
        
        for i in gain:
            results.append(results[-1] + i)
        
        return max(results)