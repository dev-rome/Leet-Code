class Solution:
    def sortPeople(self, names: List[str], heights: List[int]) -> List[str]:
        results = []
        list_people = list(zip(names, heights))
        list_people.sort(key=lambda x: -x[1])
        for name, height in list_people:
            results.append(name)
        return results