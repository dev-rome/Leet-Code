class Solution:
    def countTestedDevices(self, batteryPercentages: List[int]) -> int:
        count = 0
        n = len(batteryPercentages)
        for i in range(n):
            if batteryPercentages[i] > 0:
                count += 1
                batteryPercentages[i] += 1
                for j in range(i + 1, n):
                    batteryPercentages[j] = max(0,  batteryPercentages[j] - 1)
                i += 1
            else:
                i += 1
                
        return count
                