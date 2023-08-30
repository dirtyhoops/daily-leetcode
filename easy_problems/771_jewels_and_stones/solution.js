/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */

// Solution 1: Create a set of jewels and just iterate through stones array and check if the stone is a jewel
var numJewelsInStones = function (jewels, stones) {
  let jewelsCount = 0;
  const set = new Set(jewels);

  for (let stone of stones) {
    if (set.has(stone)) jewelsCount++;
  }

  return jewelsCount;
};

// Solution 2: Basically same as solution 1, but this one time complexity is O(n) more since it used the array split() function.
var numJewelsInStones = function (jewels, stones) {
  const set = new Set(jewels);

  return stones.split('').reduce((res, s) => res + set.has(s), 0);
};
