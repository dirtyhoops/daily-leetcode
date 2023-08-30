/**
 * @param {number} num
 * @return {number}
 */

// Solution 2
var countDigits = function (num) {
  let n = num,
    count = 0;

  while (n !== 0) {
    if (num % (n % 10) === 0) count++;
    n = Math.floor(n / 10);
  }

  return count;
};

// Solution #1: turning num to string
var countDigits = function (num) {
  const numbers = num.toString().split('');
  let count = 0;

  for (let number of numbers) {
    if (num % number === 0) count++;
  }

  return count;
};
