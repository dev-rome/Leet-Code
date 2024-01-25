class Solution:
    def isHappy(self, n: int) -> bool:
        def get_next_number(num):
            return sum(int(digit)**2 for digit in str(num))

        slow = n
        fast = get_next_number(n)

        while fast != 1 and slow != fast:
            slow = get_next_number(slow)
            fast = get_next_number(get_next_number(fast))

        return fast == 1