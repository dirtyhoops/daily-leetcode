// 1 out of 3 ways of grabbing the digits:
// Grabbing the digits by grabbing the last digit with modulo

function differenceOfSum(nums: number[]): number {
  return getSum(nums) - getSum(nums.flatMap(getDigits));
}

function getSum(nums: number[]): number {
  return nums.reduce((a, b) => a + b, 0);
}

function getDigits(num: number): number[] {
  const digits: number[] = [];

  while (num > 0) {
    digits.push(num % 10);
    num = Math.floor(num / 10);
  }

  return digits;
}
