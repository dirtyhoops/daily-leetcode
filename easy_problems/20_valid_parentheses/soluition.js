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

  const stack = [];

  for (const char of s) {
    const counterpart = pairs[char];

    // Check if it's not in the obj/map
    if (counterpart == null) {
      stack.push(char);
    } else {
      // Check if it's a valid pair
      if (stack[stack.length - 1] === pairs[char]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
};
