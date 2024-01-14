class Solution:
    def maximumNumberOfStringPairs(self, words: List[str]) -> int:
        count = 0
        for i in range(len(words)):
            for j in range(i + 1, len(words)):
                reverse_word = words[j][::-1]
                if(words[i] == reverse_word):
                    count += 1
        return count