/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function (n) {
  // if n is divisible by 2, that's the smallest even multiple, if not multiply it by 2.
  return n % 2 === 0 ? n : n * 2;
};
