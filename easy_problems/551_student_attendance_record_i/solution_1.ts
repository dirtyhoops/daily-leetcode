// Solution #1: Baseline Solution
function checkRecord(s: string): boolean {
  let totalAbsent = 0;
  let consecutiveLate = 0;

  for (const char of s) {
    if (char === 'A') totalAbsent++;

    if (char === 'L') {
      consecutiveLate++;
    } else {
      consecutiveLate = 0;
    }

    if (consecutiveLate === 3) return false;
  }

  return totalAbsent < 2;
}
