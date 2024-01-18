class Solution:
    def convertToTitle(self, columnNumber: int) -> str:
        title = ""
        
        while columnNumber > 0:
            columnNumber -= 1
            remainder = columnNumber % 26
            title = chr(ord("A") + remainder) + title
            columnNumber //= 26
            
        return title