class Solution:
    def gcdOfStrings(self, str1: str, str2: str) -> str:
        def gcd(a, b):
            while b:
                a, b = b, a % b
            return a
        
        if (str1 + str2) != (str2 + str1):
            return ""
        
        s1 = len(str1)
        s2 = len(str2)
        x = gcd(s1, s2)
        return str1[:x]
        