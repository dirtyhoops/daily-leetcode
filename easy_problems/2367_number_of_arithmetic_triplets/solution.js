/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function (nums, diff) {
  let count = 0;

  for (let i = 0, j = 1; j < nums.length - 1; j++) {
    while (i < j - 1 && nums[j] - nums[i] > diff) {
      i++;
    }

    if (nums[j] - nums[i] === diff) {
      for (let k = j + 1; k < nums.length && nums[k] - nums[j] <= diff; k++) {
        if (nums[k] - nums[j] === diff) count++;
      }
    }
  }

  return count;
};
