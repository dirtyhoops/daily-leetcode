// // Getting Digit by grabbing first digit with Math.log10
function differenceOfSum(nums: number[]): number {
  return getSum(nums) - getSum(nums.flatMap(getDigits));
}

function getSum(nums: number[]): number {
  return nums.reduce((a, b) => a + b, 0);
}

function getDigits(num: number) {
  const digits: number[] = [];
  let pow = 10 ** Math.floor(Math.log10(num));

  while (pow > 0) {
    digits.push(Math.floor(num / pow));
    num %= pow;
    pow = Math.floor(pow / 10);
  }

  return digits;
}
