// Solution #1: Converting to string
function findTheArrayConcVal(nums: number[]): number {
  let totalValue = 0;
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const concatValue = Number(nums[left].toString() + nums[right].toString());
    totalValue += left === right ? nums[left] : concatValue;
    left++;
    right--;
  }

  return totalValue;
}
