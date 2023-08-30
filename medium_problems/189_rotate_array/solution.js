/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  if (nums.length === 0) return;

  // Takes care of the k is more than the length. Don't have to rotate it more than the nums.length
  k = k % nums.length;

  // It rotates to the original position if the reminder of k/nums.length === 0
  if (k === 0) return;

  // Reverse the array first and then reverse 2 sides that's been separated by k
  nums.reverse();
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
};

// Helper function for reversing an array in-place
const reverse = (arr, start, end) => {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
};
