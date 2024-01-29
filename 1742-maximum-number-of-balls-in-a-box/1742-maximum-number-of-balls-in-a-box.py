class Solution:
    def countBalls(self, lowLimit: int, highLimit: int) -> int:
        def digit_sum(num):
            return sum(int(digit) for digit in str(num))
        
        ball_box = {}
        for num in range(lowLimit, highLimit + 1):
            box_num = digit_sum(num)
            ball_box[box_num] = ball_box.get(box_num, 0) + 1
            
        max_balls = max(ball_box.values())
            
        return max_balls