// Solution 2: Using addition/substraction after sorting
function singleNumber(nums: number[]): number {
  nums.sort();
  let res = 0;

  for (let i = 0; i < nums.length; i++) {
    res += i % 2 === 0 ? nums[i] : -1 * nums[i];
  }

  return res;
}
