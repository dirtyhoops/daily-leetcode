// 1 out of 3 ways of grabbing the digits:
// Grabbing the converting it to string

function differenceOfSum(nums: number[]): number {
  return getSum(nums) - getSum(nums.flatMap(getDigits));
}

function getSum(nums: number[]): number {
  return nums.reduce((a, b) => a + b, 0);
}

function getDigits(num: number): number[] {
  return Array.from(String(num)).map(Number);
}
