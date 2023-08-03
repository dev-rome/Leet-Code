/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function(nums) {
    let map = new Map();
	let element = Infinity;
    let max = 0;

	for (const num of nums) {
		if(num % 2 === 0) {
			let freq = 1;
			
			if(map.has(num))
				freq = map.get(num) + 1;
			
			map.set(num, freq);

			if(freq > max || freq === max && num < element){
				element = num;
				max = freq;
			}
		}
	}
	
	return max === 0 ? -1 : element;
};