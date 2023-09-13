function removeElement(nums: number[], val: number): number {
  let idx = 0;

  // Basically checks if the num is not the value to remove and
  // change the elements in nums in-place
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[idx++] = nums[i];
    }
  }

  return idx;
}
