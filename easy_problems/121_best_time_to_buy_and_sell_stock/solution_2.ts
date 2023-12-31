// Solution #2: Two Pointer
function maxProfit(prices: number[]): number {
  if (prices.length <= 1) return 0;

  let left = 0,
    right = 1,
    maxProfit = 0;

  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      maxProfit = Math.max(maxProfit, prices[right] - prices[left]);
    } else {
      left = right;
    }

    right++;
  }

  return maxProfit;
}
