/**
 * @param {number[]} nums
 * @return {number}
 */

// Solution #1: Using Frequency;
var singleNumber = function (nums) {
  const map = {};

  for (let num of nums) {
    if (map[num]) {
      delete map[num];
    } else {
      map[num] = 1;
    }
  }

  return Object.keys(map)[0];
};
