class Solution:
    def maximumWealth(self, accounts: List[List[int]]) -> int:
        max_wealth = 0
        
        for account in accounts:
            current_wealth = sum(account)
            max_wealth = max(max_wealth, current_wealth)
            
        return max_wealth