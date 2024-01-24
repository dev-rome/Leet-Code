class Solution:
    def maximumUnits(self, boxTypes: List[List[int]], truckSize: int) -> int:
        boxTypes.sort(key=lambda x: x[1], reverse=True)

        total_units = 0
        boxes_taken = 0

        for box in boxTypes:
            boxes_taken_from_type = min(truckSize - boxes_taken, box[0])
            total_units += boxes_taken_from_type * box[1]
            boxes_taken += boxes_taken_from_type

            if boxes_taken == truckSize:
                break

        return total_units