/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
  const n = nums.length;
  let curIndex = 0;

  if (n === 0) {
    // nếu mảng không có giá trị
    return 0;
  }
  for (let i = 0; i < n; i++) {
    if (nums[i] !== nums[curIndex]) {
      curIndex++;
      nums[curIndex] = nums[i];
    }
  }
  return curIndex + 1;
}

/** GIẢI THÍCH CODE
 * nums = [1,1,2];
 * độ dài mảng là: n = 3
 * duyệt mảng i từ 0 -> 2
 * 
 * 
 * Lần duyệt mảng 1 ( i = 0, curIndex = 0)
 *  nums[i] = 1
 *  nums[curIndex] = 1 
 *  => không thỏa điều kiện
 *  => mảng giữ nguyên [1,1,2];
 *  => curIndex không đổi
 *  
 * Lần duyệt mảng 2 ( i = 1, curIndex = 0)
 *  nums[i] = 1
 *  nums[curIndex] = 1
 *  => không thỏa điều kiện
 *  => mảng giữ nguyên [1,1,2];
 *  => curIndex không đổi
 * 
 * Lần duyệt mảng 3 ( i = 2, curIndex = 0)
 *  nums[i] = 2
 *  nums[cusIndex] = 1
 *  => nums[i] != nums[cusIndex] : thỏa điều kiện
 *  => curIndex = 1
 *  => nums[cusIndex] = nums[i] = 2
 *  => mảng thay đổi: [1, 2, 2]
 * 
 * => return curIndex + 1  = 2 // số lượng phần tử ( độ dài mảng)
 *                             // curIndex đại diện cho phần tử cuối cùng 
 *                             // nên muốn biết độ dài mảng thì phải + 1 
 * 
 */