/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function permute(nums) {
  let result = [];
   
    // start là biến đếm để theo dõi vị trí đang xử lý trong mảng
  function backtrack(start) {
    if (start === nums.length) {
      // Đã tạo được một hoán vị hoàn chỉnh
      result.push([...nums]); // [...nums] cú pháp tạo bản sao của nums
      return;                 // .push : thêm phần tử vào cuối mảng 
    }
        // i bắt đầu từ start đến cuối nums
        // start là vị trí bắt đầu của phần tử mà muốn hoán đổi 
    for (let i = start; i < nums.length; i++) {
      // Hoán đổi phần tử tại chỉ số start và i
      [nums[start], nums[i]] = [nums[i], nums[start]];

      // Tiếp tục hoán vị các phần tử tiếp theo
      backtrack(start + 1);

      // Hoán đổi lại để quay lại trạng thái ban đầu (backtrack)
      [nums[start], nums[i]] = [nums[i], nums[start]];
    }
  }

  backtrack(0); // gọi backtrack(0) để bắt đầu hoán vị từ vị trí 0
  return result;
}


