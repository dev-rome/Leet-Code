class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        results = [[1]]
        for i in range(numRows - 1):
            temp = [0] + results[-1] + [0]
            row = []
            for j in range(len(results[-1]) + 1):
                row.append(temp[j] + temp[j + 1])
            results.append(row)
        return results