/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function (low, high) {
  let count = 0;

  for (let i = low; i <= high; i++) {
    if (isSymmetric(i)) count++;
  }

  return count;
};

function isSymmetric(num) {
  const digitCount = getDigitCount(num);
  let left = 0;
  let right = digitCount - 1;
  let sum1 = 0,
    sum2 = 0;

  if (digitCount % 2 !== 0) return false;

  while (left < right) {
    sum1 += getDigit(num, left++);
    sum2 += getDigit(num, right--);
  }

  return sum1 === sum2;
}

function getDigitCount(num) {
  let digitCount = 0;

  while (num > 0) {
    num = Math.floor(num / 10);
    digitCount++;
  }

  return digitCount;
}

function getDigit(num, nth) {
  return Math.floor(num / 10 ** nth) % 10;
}
