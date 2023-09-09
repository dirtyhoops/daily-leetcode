/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function (nums) {
  let count = 0;
  const freq = {};

  for (let num of nums) {
    // Add num to the freq map
    freq[num] = (freq[num] || 0) + 1;

    // Check if the current frequency is even, if it is it means there's a pair
    if (freq[num] !== undefined && freq[num] % 2 === 0) {
      count++;
    }
  }

  return [count, nums.length - count * 2];
};
