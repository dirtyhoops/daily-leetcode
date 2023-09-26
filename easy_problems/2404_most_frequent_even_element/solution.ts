function mostFrequentEven(nums: number[]): number {
  const freq = {};
  let mostFreq = -1;
  let maxFreq = 0;

  for (const num of nums) {
    // check if num is not even
    if (num % 2 !== 0) continue;

    freq[num] = (freq[num] ?? 0) + 1;

    if (freq[num] === maxFreq) {
      mostFreq = Math.min(num, mostFreq);
    }

    if (freq[num] > maxFreq) {
      maxFreq = freq[num];
      mostFreq = num;
    }
  }

  return mostFreq;
}
