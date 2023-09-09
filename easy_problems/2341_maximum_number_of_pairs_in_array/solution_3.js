/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function (nums) {
  nums.sort((a, b) => a - b);
  console.log(nums);

  let pairs = 0;
  const len = nums.length;

  while (nums.length) {
    const pop = nums.pop();

    if (pop === nums.at(-1)) {
      ++pairs;
      nums.pop();
    }
  }

  return [pairs, len - pairs * 2];
};
