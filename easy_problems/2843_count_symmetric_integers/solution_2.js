/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */

// Same as solution 1 but changed the sum1 === sum2 to diff === 0
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
    diff = 0;

  while (left < right) {
    diff += parseInt(s[left++]) - parseInt(s[right--]);
  }

  return diff === 0;
}
