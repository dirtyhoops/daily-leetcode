/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let k = 0;
  // 2 pointers k and i. index k keeps tracks of the unique elements
  for (let i = 1; i < nums.length; i++) {
    // checks if value of index k is different than value of index i,
    // if it is, increment k and then change its value to value of index i.
    if (nums[k] !== nums[i]) {
      nums[++k] = nums[i];
    }
  }

  // add 1 to k since we want to return the lenght of the unique elements of nums
  return k + 1;
};
