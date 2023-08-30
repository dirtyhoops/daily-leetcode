/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
  let balancedCount = 0,
    counter = 0;

  for (let char of s) {
    char === 'L' ? counter++ : counter--;
    if (counter === 0) balancedCount++;
  }

  return balancedCount;
};
