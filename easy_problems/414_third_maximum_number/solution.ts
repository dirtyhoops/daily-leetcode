function thirdMax(nums: number[]): number {
  const set = [...new Set(nums.sort((a, b) => a - b))];

  return set.length > 2 ? set[set.length - 3] : set[set.length - 1];
}
