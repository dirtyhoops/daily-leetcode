/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const pairs = {
    ')': '(',
    ']': '[',
    '}': '{'
  };

  const arr = [];

  for (let char of s) {
    if (char === '(' || char === '{' || char === '[') {
      arr.push(char);
    } else {
      if (arr[arr.length - 1] === pairs[char]) {
        arr.pop();
      } else {
        return false;
      }
    }
  }

  return arr.length === 0 ? true : false;
};
