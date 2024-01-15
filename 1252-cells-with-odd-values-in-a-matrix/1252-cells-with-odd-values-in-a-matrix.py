class Solution:
    def oddCells(self, m: int, n: int, indices: List[List[int]]) -> int:
        odd_count = 0
        rows = [0] * m
        cols = [0] * n
        
        for i, j in indices:
            rows[i] += 1
            cols[j] += 1
            
        for i in range(m):
            for j in range(n):
                if (rows[i] + cols[j]) % 2 != 0:
                    odd_count += 1
                    
        return odd_count