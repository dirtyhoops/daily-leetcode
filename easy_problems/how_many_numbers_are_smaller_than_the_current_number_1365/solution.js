/**
 * @param {number[]} nums
 * @return {number[]}
 */

// Solution #2 - Same as solution 1 but no extra space for answer array
var smallerNumbersThanCurrent = function (nums) {
  // copy and sort
  const sortedNums = [...nums].sort((a, b) => a - b);
  return nums.map(num => sortedNums.indexOf(num));
};

// Solution #1
var smallerNumbersThanCurrent = function (nums) {
  const sortedNums = [...nums].sort((a, b) => a - b);
  const answer = [];
  nums.forEach(num => answer.push(sortedNums.indexOf(num)));
  return answer;
};
