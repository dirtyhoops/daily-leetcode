// Brute Force solution
function countOdds(low: number, high: number): number {
  let count = 0;

  for (let i = low; i <= high; i++) {
    if (i % 2 !== 0) count++;
  }

  return count;
}
