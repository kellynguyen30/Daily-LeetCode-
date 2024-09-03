/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
function removeElement(nums, val) {
  const n = nums.length;
  let curIndex = 0;
  for (let i = 0; i < n; i++) {
    if (nums[i] != val) {
      nums[curIndex] = nums[i];
      curIndex++;
    }
  }
  return curIndex;
}
