class Solution:
    def maxNumberOfBalloons(self, text: str) -> int:
        char_count = {}
    
        for char in text:
            char_count[char] = char_count.get(char, 0) + 1
    
        b_count = char_count.get('b', 0)
        a_count = char_count.get('a', 0)
        l_count = char_count.get('l', 0) // 2
        o_count = char_count.get('o', 0) // 2
        n_count = char_count.get('n', 0)
    
        return min(b_count, a_count, l_count, o_count, n_count)