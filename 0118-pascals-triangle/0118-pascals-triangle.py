class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        results = []
        for i in range(numRows):
            row = [1] * (i + 1)
            for j in range(1, i):
                row[j] = results[i - 1][j - 1] + results[i - 1][j]
            results.append(row)
        return results