function findMaxK(nums: number[]): number {
  nums.sort((a, b) => a - b);
  const map = {};
  let max = -1;

  for (const num of nums) {
    map[num] = (map[num] ?? 0) + 1;
    if (map[num * -1]) {
      max = Math.max(max, num);
    }
  }

  return max;
}
