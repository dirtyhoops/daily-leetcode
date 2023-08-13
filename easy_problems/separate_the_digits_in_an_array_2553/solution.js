/**
 * @param {number[]} nums
 * @return {number[]}
 */

// Solution #2
var separateDigits = function (nums) {
  const answer = [];
  for (let i = 0; i < nums.length; i++) {
    let tempArr = [];
    while (nums[i] !== 0) {
      tempArr.push(nums[i] % 10);
      nums[i] = Math.trunc(nums[i] / 10);
    }

    // push the temp array starting from the last index to answer array
    for (let i = tempArr.length - 1; i >= 0; i--) {
      answer.push(tempArr[i]);
    }
  }

  return answer;
};

// Solution #1: Join the numbers and then separate them
var separateDigits = function (nums) {
  return nums.join('').split('');
};
