/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function(key, message) {
  let results = "";
  let num = 97;
  let obj = new Map();

  for (const letter of key) {
    if (obj.has(letter) || letter === " ") continue;
    obj.set(letter, String.fromCharCode(num++));
  }
  obj.set(" ", " ");

  for (let str of message) {
    results += obj.get(str);
  }
  return results;
};