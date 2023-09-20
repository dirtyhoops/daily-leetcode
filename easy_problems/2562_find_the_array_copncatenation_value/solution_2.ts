// Solution #2: Converting to string using template literal
function findTheArrayConcVal(nums: number[]): number {
  let totalValue = 0;
  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    const concatValue = Number(`${nums[left]}${nums[right]}`);
    totalValue += left === right ? nums[left] : concatValue;
    left++;
    right--;
  }

  return totalValue;
}
