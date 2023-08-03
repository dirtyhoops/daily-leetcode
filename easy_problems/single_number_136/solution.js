/**
 * @param {number[]} nums
 * @return {number}
 */

var singleNumber = function (nums) {
  if (nums.length === 1) return nums[0];

  const map = {};

  for (let num of nums) {
    if (map[num]) {
      delete map[num];
    } else {
      map[num] = 1;
    }
  }

  return Object.keys(map)[0];
};
