class Solution:
    def findMissingAndRepeatedValues(self, grid: List[List[int]]) -> List[int]:
        seen = set()
        n = len(grid)
        repeat_number = 0
        missing_number = 0
        
        for row in grid:
            for num in row:
                if num in seen:
                    repeat_number = num
                seen.add(num)
                
        for i in range(1, n * n + 1):
            if i not in seen:
                missing_number = i
        
        return [repeat_number, missing_number]
            
            