/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  // iterate through digits array starting from the last index until satisfy the return value. Checks if the current
  // value of the index is equal to 9, if it is, change the value to 0, else just add 1 to the value and return it.
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] === 9) {
      digits[i] = 0;
    } else {
      digits[i]++;
      return digits;
    }
  }

  // if it gets out of the loop. it means that we need to add a 1 to the front of the array.
  digits.unshift(1);
  return digits;
};
