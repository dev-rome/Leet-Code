class Solution:
    def minMovesToSeat(self, seats: List[int], students: List[int]) -> int:
        min_moves = 0
        seats.sort()
        students.sort()
        
        for seat, student in zip(seats, students):
            min_moves += abs(seat - student)
                    
        return min_moves
            
                