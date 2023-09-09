/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function (nums) {
  nums.sort((a, b) => b - a);

  let pairs = 0;
  let ind = 1;

  while (ind < nums.length) {
    if (nums[ind] === nums[ind - 1]) {
      ++pairs;
      ++ind;
    }

    ++ind;
  }

  return [pairs, nums.length - pairs * 2];
};
