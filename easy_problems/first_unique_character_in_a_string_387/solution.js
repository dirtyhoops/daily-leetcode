/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const freq = {};

  for (let char of s) {
    freq[char] = freq[char] + 1 || 1;
  }

  // Look for the char that only appeared once
  for (let i = 0; i < s.length; i++) {
    if (freq[s[i]] === 1) return i;
  }

  // If it gets out of that loop, it means that there are no non-repeating characters
  return -1;
};
