// Solution #3: Without converting to string
function findTheArrayConcVal(nums: number[]): number {
  let totalValue = 0;
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    totalValue +=
      left === right ? nums[left] : concatNumbers(nums[left], nums[right]);
    left++;
    right--;
  }

  return totalValue;
}

function concatNumbers(a: number, b: number): number {
  return a * 10 ** (1 + Math.floor(Math.log10(b))) + b;
}
