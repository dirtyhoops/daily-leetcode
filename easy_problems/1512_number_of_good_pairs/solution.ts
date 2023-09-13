function numIdenticalPairs(nums: number[]): number {
  const freq = new Map();

  for (const num of nums) {
    // freq[num] = (freq[num] ?? 0) + 1;
    freq.set(num, (freq.get(num) ?? 0) + 1);
  }

  let count = 0;
  for (const [, freqValue] of freq) {
    count += (freqValue * (freqValue - 1)) / 2;
  }

  return count;
}
