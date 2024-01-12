class Solution:
    def minMovesToSeat(self, seats: List[int], students: List[int]) -> int:
        min_moves = 0
        seats.sort()
        students.sort()
        
        for i in range(len(students)):
            while students[i] != seats[i]:
                if students[i] < seats[i]:
                    students[i] += 1
                    min_moves += 1
                else:
                    students[i] -= 1
                    min_moves += 1
                    
        return min_moves
            
                