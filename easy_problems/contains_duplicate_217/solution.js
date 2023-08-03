/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  // Create a set and compares its size to the length of nums array
  const set = new Set(nums);
  return set.size !== nums.length;
};
