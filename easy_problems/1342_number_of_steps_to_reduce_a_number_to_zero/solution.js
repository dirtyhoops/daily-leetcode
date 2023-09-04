/**
 * @param {number} num
 * @return {number}
 */

// Solution 2. Recursive Solution
var numberOfSteps = function (num) {
  return num === 0 ? 0 : 1 + numberOfSteps(num % 2 === 0 ? num / 2 : num - 1);
};

// Solution 1. Iterative Solution
var numberOfSteps = function (num) {
  let steps = 0;

  while (num > 0) {
    num = num % 2 === 0 ? num / 2 : num - 1;
    ++steps;
  }

  return steps;
};
