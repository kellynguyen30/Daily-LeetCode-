//15. ValueOccurrences
//CÁCH 1:
function solution(A) {
  let freq = new Map();

 // Bước 1: Đếm tần suất của mỗi giá trị trong mảng
  for (let num of A) {
      freq.set(num, (freq.get(num) || 0) + 1);
  }

  let moves = 0;

  // Bước 2: Duyệt qua các giá trị trong tần suất
  for (let [x, count] of freq) {
      if (count < x) {
          // Nếu số lần xuất hiện ít hơn giá trị x, có 2 lựa chọn:
          let costAdd = x - count; // Thêm để đạt đủ số lượng x
          let costRemove = count;  // Xóa tất cả phần tử x
          moves += Math.min(costAdd, costRemove); // Chọn lựa phương án tối ưu
      } else if (count > x) {
          // Nếu số lần xuất hiện nhiều hơn x, chỉ cần xóa phần dư thừa
          moves += count - x;
      }
  }

  return moves;
}

// CÁCH 2:
// function solution(A) {
//   let moves = 0;
//   let n = A.length;

//   let i = 0;
//   while (i < n) {
//       let x = A[i];
//       let count = 0;

//       // Đếm số lần xuất hiện của giá trị x
//       while (i < n && A[i] === x) {
//           count++;
//           i++;
//       }

//       // Tính toán số bước cần thực hiện
//       if (count < x) {
//           let costAdd = x - count; // Thêm để đạt đủ số lượng x
//           let costRemove = count;  // Xóa tất cả phần tử x
//           moves += Math.min(costAdd, costRemove); // Chọn phương án tối ưu
//       } else if (count > x) {
//           moves += count - x; // Xóa phần dư thừa
//       }
//   }

//   return moves;
// }


// Test cases
const testCases = [
  [1, 1, 3, 4, 4, 4], // Expected output: 3
  [1, 2, 2, 2, 5, 5, 5, 8], // Expected output: 4
  [1, 1, 1, 1, 3, 3, 4, 4, 4, 4, 4], // Expected output: 5
  [10, 10, 10] // Expected output: 3
];

testCases.forEach((testCase, index) => {
  console.log(`Test case ${index + 1}:`);
  console.log(`Input: ${testCase}`);
  console.log(`Output: ${solution(testCase)}`);
});


/** GIẢI THÌ LUỒNG ĐI CỦA CODE CÁCH 1
 * 
 * Cho mảng A với các phần tử Num:  A = [1, 1, 3, 4, 4, 4] 
 * 
 * - Tạo 1 map freq rỗng để lưu số lần xuất hiện của các phần tử num
 * - Key: là phần tử 
 * - Value:là số lần xuất hiện của phần tử
 * ----------------------------------------------------------------------------------------------------------------------------------------------------------
 * BƯỚC 1: DÙNG FOR OF ĐỂ DUYỆT QUA CÁC PHẦN TỬ CỦA MẢNG A (KHÔNG CẦN BIẾT INDEX) ĐỂ ĐẾM SỐ LẦN XUẤT HIỆN 
 *  
 *  freq.get(key): truy xuất value liên quan đến key trong map
 *               : nếu key không tồn tại trong map -> undefined 
 * 
 *  freq.set(key, value): thêm cặp key-value vào map
 *                      : nếu key đã tồn tại trong map, chỉ cần cập nhật value mới
 * 
 * (freq.get(num) || 0) : trả về value của num HOẶC 0 (undefined vì num chưa có trong map)
 *      + 1             : cập nhật value mới 
 *        ============================================================================================================================================
 * - MAP BAN ĐẦU LÀ RỖNG:
 *  num = 1 : freq.get(1) -> undefined ( 1 chưa có trong map) -> 0 +1 = 1
 *          : freq.set(1,1) => freq = {1: 1}
 * 
 *  num = 1: freq.get(1) ->  (1 đã có trong map) -> cập nhật value thành 2 (1+1)
 *         : freq.set(1,2) => freq = {1: 2}
 * 
 *  num = 3: freq.get(3) -> undefined ( 3 chưa có trong map) -> 0 + 1 = 1
 *         : freq.set(3,1) => freq = {1: 2, 3:1}
 * 
 *  num = 4: freq.get(4) -> undefined ( 4 chưa có trong map) -> 0 + 1 = 1
 *         : freq.set(4,1) => freq = {1: 2, 3:1, 4:1}
 * 
 *  num = 4: freq.get(4) ->  (4 đã có trong map) -> cập nhật value thành 2 (1+1)
 *         : freq.set(4,2) => freq = {1: 2, 3:1, 4:2}
 * 
 *  num = 4: freq.get(4) ->  (4 đã có trong map) -> cập nhật value thành 3 (2+1)
 *         : freq.set(4,3) => freq = {1: 2, 3:1, 4:3}
 * 
 * --------------------------------------------------------------------------------------------------------------------------------------------------------------
 * BƯỚC 2: DÙNG FOR OF  DUYỆT QUA CẶP KEY-VALUE CỦA FREQ ĐỂ XỬ LÝ 
 * - Tạo biến moves = 0 : để tính số bước (KẾT QUẢ PHẢI RETURN  SỐ BƯỚC ÍT NHẤT CÓ THỂ THỰC HIỆN)
 * - freq = {1: 2, 3:1, 4:3} 
 * - x là key: các phần tử (1,3 ,4) trong map
 * - count là value: số lần xuất hiện (2,1,3)
 * - costAdd: chi phí khi thêm x
 * - costRemove: chi phí khi xóa x 
 * 
 * - Xét 2 trường hợp:
 *  + count > x: xóa bớt count để nó = x  
 *  + count < x: có 2 trường hợp
 *      . thêm count để nó = x -> costAdd
 *      . loại bỏ count để = 0 -> costRemove
 *      -> tìm min(costAdd, costRemove): để lấy phương án ít nhất 
 * 
 *  =====================================================================================================
 *  x = 1, count = 2
 *    count(2) > x(1): 2 -1 = 1 (xóa 1 phần tử 1)
 *    moves += count : 0 + 1 = 1 
 * 
 *  x = 3, count = 1
 *    count(1) < x(3): có 2 lựa chọn
 *      + costAdd = 3 - 1 = 2
 *      + costRemove = 1 
 *    moves += min(2,1) = 1 + 1 = 2
 * 
 *  x = 4, count = 3
 *    count(3) < x(4): có 2 lựa chọn
 *      + costAdd = 4 - 3 = 1
 *      + costRemove = 3
 *    moves += min(1,3) = 2 + 1 = 3 
 *    
 * => return moves = 3
 *  
 */