class Solution:
    def commonChars(self, words: List[str]) -> List[str]:
        if not words:
            return []
        
        common_counter = Counter(words[0])
        for word in words[1:]:
            word_counter = Counter(word)
            common_counter &= word_counter
            
        result = []
        for char, count in common_counter.items():
            result.extend([char] * count)

        return result