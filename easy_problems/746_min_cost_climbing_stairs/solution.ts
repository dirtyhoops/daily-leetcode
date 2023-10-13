function minCostClimbingStairs(cost: number[]): number {
  cost.push(0);
  for (let i = 2; i < cost.length; i++) {
    cost[i] += Math.min(cost[i - 1], cost[i - 2]);
  }

  return cost.at(-1);
}
