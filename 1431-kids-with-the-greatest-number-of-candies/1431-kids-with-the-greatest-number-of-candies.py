class Solution:
    def kidsWithCandies(self, candies: List[int], extraCandies: int) -> List[bool]:
        max_candies = max(candies)
        results = []
        for i in range(len(candies)):
            results.append(candies[i] + extraCandies >= max_candies)
        return results