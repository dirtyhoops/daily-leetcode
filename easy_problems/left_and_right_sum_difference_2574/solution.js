/**
 * @param {number[]} nums
 * @return {number[]}
 */

// Second and more optimal solution
var leftRightDifference = function (nums) {
  let leftSum = 0,
    rightSum = 0;

  // Add every numbers in nums
  for (let num of nums) rightSum += num;

  // Deduct the current value of the index and then deduct that
  // from rightSum and then deduct the leftSum and then add the
  // currentValue of the index to leftSum
  for (let i = 0; i < nums.length; i++) {
    let temp = nums[i];
    rightSum -= temp;
    nums[i] = Math.abs(leftSum - rightSum);
    leftSum += temp;
  }

  return nums;
};

//  // Naive Solution
// var leftRightDifference = function(nums) {
//     let leftSum = [0], rightSum = [0], answer = [];

//     // Get the sum of elements to the left of index i
//     for (let i = 0; i < nums.length-1; i++) {
//         leftSum.push(leftSum[leftSum.length-1] + nums[i]);
//     }

//     // right side - this could be better, could do reverse the nums
//     // and then calculate it like leftSum and then reverse it after.
//     for (let i = nums.length - 1; i > 0; i--) {
//         rightSum.unshift(rightSum[0] + nums[i]);
//     }

//     for (let i = 0; i < nums.length; i++) {
//         answer.push(Math.abs(leftSum[i] - rightSum[i]));
//     }

//     return answer;
// };
