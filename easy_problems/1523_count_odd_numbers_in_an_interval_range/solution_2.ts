// More Efficient Solution
function countOdds(low: number, high: number): number {
  let res = (high - low) / 2;

  return low % 2 !== 0 && high % 2 !== 0 ? res + 1 : res;
}
