/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const map = {};
  let intersections = [];

  // Add nums1 to the map with a key-value pairs of nums[i]: times it appeared in the array nums1
  for (let num of nums1) {
    map[num] = map[num] + 1 || 1;
  }

  // Check if num in nums is in the map
  for (let num of nums2) {
    if (map[num] > 0) {
      intersections.push(num);
      map[num]--;
    }
  }

  return intersections;
};
