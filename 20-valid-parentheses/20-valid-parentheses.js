/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
       if(s.length % 2 !== 0) return false;
//     Lets keep track of what's open and then when they close
//     The most recent open one, has to be closed first
    let openParens = [];
    for(let i = 0; i < s.length; i++) {
        if(s[i] === '(' || s[i] === '[' || s[i] === '{') openParens.push(s[i]);
//         Test if it's closing one of them, the last index of 
//         openParens MUST be the opposite (if it's closing ) then the
//         last index must be ( or it's not valid)
        else if(s[i] === ')') {
            if(openParens[openParens.length - 1] === "(") openParens.pop();
            else return false;
        } else if(s[i] === ']') {
            if(openParens[openParens.length - 1] === "[") openParens.pop();
            else return false;
        } else if(s[i] === '}') {
            if(openParens[openParens.length - 1] === "{") openParens.pop();
            else return false;
        }
    }
    console.log(openParens)
    return openParens.length > 0 ? false : true;
};