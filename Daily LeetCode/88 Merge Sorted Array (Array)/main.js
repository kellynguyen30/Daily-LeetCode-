/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1, m, nums2, n) {
  // Phần tử cuối cùng:
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1; //  phần tử cuối cùng của mảng khi cập nhật

  // nếu i, j nhỏ hơn không thì là có nghĩa đã duyệt qua hết mảng
  while (i >= 0 || j >= 0) {
    if (i >= 0 && j >= 0) {
      // i & j valid, nằm trong mảng
      if (nums1[i] >= nums2[j]) {
        //  i lớn hơn j
        nums1[k] = nums1[i];
        i--;
        k--;
      } // i nhỏ hơn j
      else {
        nums1[k] = nums2[j];
        j--;
        k--;
      }
    } else if (i >= 0) {
      // only i valid
      nums1[k] = nums1[i];
      i--;
      k--;
    } // only j hợp lệ
    else {
      nums1[k] = nums2[j];
      j--;
      k--;
    }
  }
}
