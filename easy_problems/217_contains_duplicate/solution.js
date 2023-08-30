/**
 * @param {number[]} nums
 * @return {boolean}
 */

// A little bit better Time complexity than the Solution #1. it's O(n) at the worst.
var containsDuplicate = function (nums) {
  // Create a set and compares its size to the length of nums array
  const set = new Set();

  // Check if the num is in the set.
  for (let num of nums) {
    if (set.has(num)) return true;
    set.add(num);
  }

  // No duplicates if it gets out of that loop, so return false.
  return false;
};

// Solution #1
// var containsDuplicate = function(nums) {
//     // Create a set and compares its size to the length of nums array
//     const set = new Set(nums);
//     return set.size !== nums.length;
// };
