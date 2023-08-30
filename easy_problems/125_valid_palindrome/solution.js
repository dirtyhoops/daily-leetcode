/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  // replace all spaces and special characters with '' and then lowercase
  s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  let start = 0;
  let end = s.length - 1;

  // Basically compare the characters
  while (start < end) {
    if (s[start] !== s[end]) return false;
    start++;
    end--;
  }

  return true;
};
