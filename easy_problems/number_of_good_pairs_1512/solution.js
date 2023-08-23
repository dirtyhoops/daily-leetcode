/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  const map = {};
  let count = 0;

  for (let num of nums) {
    if (map[num]) {
      count += map[num];
      map[num]++;
    } else {
      map[num] = 1;
    }
  }

  return count;
};
