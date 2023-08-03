/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */

// Solution 1: Imperative style. Basically just iterate through array hours
// and increments count if the hour is greater than or equal the target.
var numberOfEmployeesWhoMetTarget = function (hours, target) {
  let count = 0;

  for (let hour of hours) {
    if (hour >= target) count++;
  }

  return count;
};

// Solution 2: Functional programming style. Basically filters the hours
// and return the lenght of the filtered result
var numberOfEmployeesWhoMetTarget = function (hours, target) {
  return hours.filter(hour => hour >= target).length;
};
