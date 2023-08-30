/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  let count = nums[0];

  for (let i = 1; i < nums.length; i++) {
    count = count + nums[i];
    nums[i] = count;
  }

  return nums;
};
