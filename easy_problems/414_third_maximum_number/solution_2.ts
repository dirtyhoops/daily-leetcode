function thirdMax(nums: readonly number[]): number {
  return kthMax(nums, 3);
}

function kthMax(nums: readonly number[], k: number): number {
  const maxesQueue = new MinPriorityQueue();
  const maxesSet = new Set<number>();

  for (const num of nums) {
    if (!maxesSet.has(num)) {
      maxesQueue.enqueue(num);
      maxesSet.add(num);

      if (maxesQueue.size() > k) {
        maxesSet.delete(maxesQueue.dequeue().element);
      }
    }
  }

  return (maxesQueue.size() >= k ? maxesQueue.front() : maxesQueue.back())
    .element;
}

function thirdMax(nums: readonly number[]): number {
  return kthMax(nums, 3);
}

function kthMax(nums: readonly number[], k: number): number {
  const maxes = [];

  for (const num of nums) {
    if (!maxes.includes(num)) {
      maxes.push(num);
      maxes.sort((a, b) => a - b);

      if (maxes.length > k) {
        maxes.shift();
      }
    }
  }

  return maxes.at(maxes.length >= k ? 0 : -1);
}
