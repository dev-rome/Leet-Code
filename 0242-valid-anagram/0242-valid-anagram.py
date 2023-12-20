class Solution(object):
    def isAnagram(self, s, t):
        if len(s) != len(t):
            return False
        
        count_s = {}
        count_t = {}
        
        for letter in range(len(s)):
            count_s[s[letter]] = count_s.get(s[letter], 0) + 1
            count_t[t[letter]] = count_t.get(t[letter], 0) + 1
            
        return count_s == count_t
            
        