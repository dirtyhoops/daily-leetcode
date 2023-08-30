/**
 * @param {number[]} nums
 * @return {number[]}
 */

//  Solution #2: no nested loop
var decompressRLElist = function (nums) {
  let answer = [];

  for (let i = 0; i < nums.length; i += 2) {
    answer.push(...new Array(nums[i]).fill(nums[i + 1]));
  }

  return answer;
};

//  Solution #1:
var decompressRLElist = function (nums) {
  let answer = [];
  for (let i = 0; i < nums.length; i += 2) {
    for (let j = 1; j <= nums[i]; j++) {
      answer.push(nums[i + 1]);
    }
  }

  return answer;
};
