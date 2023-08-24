/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function (nums, k) {
  const map = {};
  let count = 0;

  for (let num of nums) {
    map[num] = map[num] + 1 || 1;
  }

  for (let num of nums) {
    if (map[num - k]) count += map[num - k];
  }

  return count;
};
