/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
	const arr = paragraph.toLowerCase().split(/[ !?',;.]/)
	const map = {}
	let result = ''
	let max = 0

	for(let word of arr){
	
		if(!banned.includes(word) && word !== ''){
			map[word] = (map[word] || 0) + 1
			
			if(max < map[word]){
				max = map[word]
				result = word
			}
		}
	}

	return result
};