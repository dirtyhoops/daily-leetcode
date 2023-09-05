/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// Solution 2: Two Pointers
var countPairs = function (nums, target) {
  let pairs = 0,
    left = 0,
    right = nums.length - 1;
  nums.sort((a, b) => a - b);

  while (left < right) {
    if (nums[left] + nums[right] < target) {
      // if it satisfies the condition, every sums in between are are less than target, so add them to                the pairs counter
      pairs += right - left;
      ++left;
    } else {
      --right;
    }
  }

  return pairs;
};

// Solution 1: Brute Force
var countPairs = function (nums, target) {
  let pairs = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] < target) {
        ++pairs;
      }
    }
  }

  return pairs;
};
