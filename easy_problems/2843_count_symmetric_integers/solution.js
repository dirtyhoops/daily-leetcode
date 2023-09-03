/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */

// Solution #1
var countSymmetricIntegers = function (low, high) {
  let count = 0;

  for (let i = low; i <= high; i++) {
    let str = i.toString();

    if (str.length % 2 === 0) {
      if (isSymmetric(str)) count++;
    }
  }

  return count;
};

function isSymmetric(s) {
  let left = 0,
    right = s.length - 1,
    sum1 = 0,
    sum2 = 0;

  while (left < right) {
    sum1 += parseInt(s[left++]);
    sum2 += parseInt(s[right--]);
  }

  return sum1 === sum2;
}
