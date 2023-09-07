/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const freq = {};

  for (let char of s) {
    freq[char] = (freq[char] || 0) + 1;
  }

  for (let char of t) {
    if (freq[char] === 0 || !freq[char]) return false;
    freq[char]--;
  }

  return true;
};
