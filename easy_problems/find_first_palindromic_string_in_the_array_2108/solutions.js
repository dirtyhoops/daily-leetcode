/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function (words) {
  for (let word of words) {
    let isPalindrome = checkPalindrome(word);
    if (isPalindrome === true) return word;
  }

  function checkPalindrome(word) {
    let start = 0,
      end = word.length - 1;

    while (start < end) {
      if (word[start] !== word[end]) return false;
      start++;
      end--;
    }

    return true;
  }

  // Returns empty string if it gets out of the loop
  return '';
};
