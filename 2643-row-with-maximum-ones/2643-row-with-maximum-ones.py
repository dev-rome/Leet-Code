class Solution:
    def rowAndMaximumOnes(self, mat: List[List[int]]) -> List[int]:
        max_ones_count = 0
        row_index = 0

        for i, row in enumerate(mat):
            ones_count = row.count(1)

            if ones_count > max_ones_count:
                max_ones_count = ones_count
                row_index = i

        return [row_index, max_ones_count]