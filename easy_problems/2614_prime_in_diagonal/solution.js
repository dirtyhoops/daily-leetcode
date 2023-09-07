/**
 * @param {number[][]} nums
 * @return {number}
 */

// Cleaner Solution compare to the one below
var diagonalPrime = function (nums) {
  let maxPrime = 0;
  let n = nums.length;

  // Basically checks if the numbers that is in diagonals of is prime and then compare it to the maxPrime
  for (let i = 0; i < n; i++) {
    const left = nums[i][i];
    if (left > maxPrime && isPrime(left)) {
      maxPrime = left;
    }

    const right = nums[i][n - 1 - i];
    if (right > maxPrime && isPrime(right)) {
      maxPrime = right;
    }
  }

  return maxPrime;
};

// Faster solution than brute force
function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return num > 1;
}

// // Old Solution
// var diagonalPrime = function (nums) {
//   let maxPrime = 0;

//   // Basically checks if the numbers that is in diagonals of is prime and then compare it to the maxPrime
//   for (let i = 0; i < nums[0].length; i++) {
//     if (isPrime(nums[i][i])) maxPrime = Math.max(maxPrime, nums[i][i]);
//     if (isPrime(nums[i][nums[0].length - 1 - i]))
//       maxPrime = Math.max(maxPrime, nums[i][nums[0].length - 1 - i]);
//   }

//   return maxPrime;
// };

// Brute Force way of checking if a number is prime
// function isPrime(num) {
//     if (num <= 1) return false;
//     if (num === 2) return true;

//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) return false;
//     }

//     return true;
// }
