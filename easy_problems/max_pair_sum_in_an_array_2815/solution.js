/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSum = function (nums) {
  let max = -1;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const maxA = getMax(nums[i]);
      const maxB = getMax(nums[j]);

      if (maxA === maxB) {
        max = Math.max(max, nums[i] + nums[j]);
      }
    }
  }

  return max;
};

function getMax(num) {
  let max = -1;
  while (num > 0) {
    max = Math.max(max, num % 10);
    num = Math.floor(num / 10);
  }

  return max;
}
