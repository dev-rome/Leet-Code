class Solution:
    def distributeCandies(self, candyType: List[int]) -> int:
        unique_candies = set(candyType)
        max_candies_to_eat = min(len(unique_candies), len(candyType) // 2)
        return max_candies_to_eat
                
            