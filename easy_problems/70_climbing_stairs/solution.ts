// DP solution
function climbStairs(n: number): number {
  const dp = Array(n + 1).fill(1);

  for (let i = 2; i < dp.length; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}
