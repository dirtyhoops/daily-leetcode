/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  const map = {};

  // Create a map with frequency of the characters
  for (let char of s) {
    map[char] = map[char] + 1 || 1;
  }

  // Check if the character is in the map. if it's not then
  // that means that's the difference
  for (let char of t) {
    if (!map[char]) return char;
    map[char]--;
  }
};
