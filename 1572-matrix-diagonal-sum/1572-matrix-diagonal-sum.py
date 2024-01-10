class Solution:
    def diagonalSum(self, mat: List[List[int]]) -> int:
        n = len(mat)
        diagonal_sum = 0

        for i in range(n):
            diagonal_sum += mat[i][i]  # Add elements from the primary diagonal

            # Check if the element is not part of the primary diagonal
            if i != n - 1 - i:
                diagonal_sum += mat[i][n - 1 - i]  # Add elements from the secondary diagonal

        return diagonal_sum