class Solution:
    def mostWordsFound(self, sentences: List[str]) -> int:
        max_count = 0
        for sentence in range(len(sentences)):
            current_sentence = sentences[sentence].split()
            if len(current_sentence) > max_count:
                max_count = len(current_sentence)
        return max_count