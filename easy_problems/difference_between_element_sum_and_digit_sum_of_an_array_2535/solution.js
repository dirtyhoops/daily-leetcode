/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function (nums) {
  let elemSum = 0;
  let digitSum = 0;

  for (let n of nums) {
    elemSum += n;
    digitSum += n > 9 ? getDigitSum(n) : n;
  }

  return Math.abs(elemSum - digitSum);
};

function getDigitSum(num) {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }

  return sum;
}
