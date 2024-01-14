class Solution:
    def destCity(self, paths: List[List[str]]) -> str:
        city_dict = {}
        for city_a, city_b in paths:
            city_dict[city_a] = city_b
        
        for value in city_dict.values():
            if value not in city_dict:
                return value
                