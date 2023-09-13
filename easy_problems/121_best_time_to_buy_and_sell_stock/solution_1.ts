// Solution #1: Check for min and max every iteration
function maxProfit(prices: number[]): number {
  if (prices.length <= 1) return 0;

  let min = prices[0];
  let maxProfit = 0;

  for (const price of prices) {
    min = Math.min(min, price);
    maxProfit = Math.max(maxProfit, price - min);
  }

  return maxProfit;
}
