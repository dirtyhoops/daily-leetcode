/**
 * @param {number} x
 * @return {boolean}
 */

// Solution 3: Getting the Reversed number without converting it to string
var isPalindrome = function (x) {
  // check if number is a negative
  if (x < 0) return false;

  return x === getReverse(x);
};

function getReverse(num) {
  let reversedNum = 0;

  while (num > 0) {
    reversedNum = reversedNum * 10 + (num % 10);
    num = Math.floor(num / 10);
  }

  return reversedNum;
}

// // Solution 2
var isPalindrome = function (x) {
  let rev = x.toString().split('').reverse().join('');

  return x == rev;
};

// Solution 1: Converting x to string
var isPalindrome = function (x) {
  const nums = x.toString().split('');
  let start = 0,
    end = nums.length - 1;

  while (start < end) {
    if (nums[start++] !== nums[end--]) return false;
  }

  return true;
};
