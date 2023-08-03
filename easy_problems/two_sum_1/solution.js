/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const numIdx = {};

  // Check if the difference in target and the value of the current index is in the
  // hashmap/object, if it is  return the value of that key and the current index
  // as an array. if not, just add the key value pair of nums[i] and i
  for (let i = 0; i < nums.length; i++) {
    if (numIdx[target - nums[i]] >= 0) return [i, numIdx[target - nums[i]]];
    numIdx[nums[i]] = i;
  }
};
