/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */

// Solution #2 without for loop and with Array Method
var kidsWithCandies = function (candies, extraCandies) {
  const max = Math.max(...candies);
  return candies.map(candy => candy + extraCandies >= max);
};

// Solution #1 with for loop
var kidsWithCandies = function (candies, extraCandies) {
  const max = Math.max(...candies);
  const result = [];

  for (let candy of candies) {
    if (candy + extraCandies >= max) {
      result.push(true);
    } else {
      result.push(false);
    }
  }

  return result;
};
