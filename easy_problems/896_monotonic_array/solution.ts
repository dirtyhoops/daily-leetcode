function isMonotonic(nums: number[]): boolean {
  if (nums.length <= 1) return true;

  let dir = 0;

  for (let i = 1; i < nums.length; i++) {
    const diff = nums[i] - nums[i - 1];

    if (diff < 0) {
      if (dir === 1) {
        return false;
      }

      dir = -1;
    } else if (diff > 0) {
      if (dir === -1) {
        return false;
      }

      dir = 1;
    }
  }

  return true;
}
