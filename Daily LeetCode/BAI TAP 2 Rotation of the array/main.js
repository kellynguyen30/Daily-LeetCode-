//BÀI TẬP 2: Rotation of the array 
/**
 * - N === 0 : Mảng rỗng => return arr
 * - K === 0 : Không cần xoay => return arr
 * 
 * - actualK = K % N: Tìm số lần xoay thực tế: 
 *  + nếu K === N: thì đi hết N mảng sẽ về như ban đầu => arr
 *  + nếu K > N  : thì  actualK là chỉ cần xoay phần dư .
 *     Ví DỤ K = 7, N = 5: xoay N = 5 thì mảng trở về như ban đầu, nhưng vẫn cần xoay thêm thêm 2 lần nữa để bằng K
 *      => vậy chỉ cần xoay phần dư  7%5
 *  + nếu K < N: số lần xoay vẫn là K vì K chưa vượt độ dài mảng 
 *
 *  - Sau khi biết được actualK thì cứ cắt mảng tử vị trí actualK cho lên trước + phần mảng còn lại 
 *    + slice: truy xuất phần tử của mảng 
 *    + arr.slice(-actualK): truy xuất 3 phần tử cuối của mảng
 *    + arr.slice(0, -actualK): truy xuất phần tử từ 0 đến phía trước -actualK (không bao gồm -actualK)
 *    + concat: kết hợp 2 phần của mảng thàng một mảng mới
 *  
 */

function solution ( arr, k)
{
   const n = arr.length;

   if( n === 0 || k === 0)
   {
    return arr;
   }

   const actualK = k % n;

   return arr.slice(-actualK).concat(arr.slice(0, -actualK)); 


   
}

//test case
console.log(solution([3, 8, 9, 7, 6], 3)); // [9, 7, 6, 3, 8]
console.log(solution([0, 0, 0], 1)); // [0, 0, 0]
console.log(solution([1, 2, 3, 4], 4)); // [1, 2, 3, 4]