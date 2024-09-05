/**
 * @param {number[]} arr
 * @return {number[]}
 */
// CÁCH 1:
function replaceElements(arr) {
  const n = arr.length;
  for (let i = n - 1; i >= 0; i--) {
    if (i !== n - 1) {
      arr[i] = Math.max(arr[i], arr[i + 1]);
    }
  }
  for (let i = 1; i < n; i++) {
    arr[i - 1] = arr[i];
  }
  if (n > 0) { // nó vẫn có giá trị chữ không phải là mãng rỗng
    arr[n - 1] = -1;
  }
  return arr;
}

// CÁCH 2: TỐI ƯU HƠN
/**
 * @param {number[]} arr
 * @return {number[]}
 */
function replaceElements(arr) {
  const n = arr.length;
  let maxFromRight = -1; 
  
  for (let i = n - 1; i >= 0; i--) {
      const newMax = Math.max(maxFromRight, arr[i]); 
      arr[i] = maxFromRight; 
      maxFromRight = newMax; 
  }
  
  return arr;
}

// GIẢI THÍCH CÁCH 2
/**[17,18,5,4,6,1]. n = 6

Thiết lập ban đầu:
 * maxFromRight : 
 *  - giá trị khởi tạo để so sánh trong vòng lặp 
 *  - khi vòng lặp bắt đầu từ n-1, maxFromRight sẽ dùng để thay thế cho phần tử này
 * 
 * maxFromRight = -1
 * 
 * Vòng lặp 1 ( i = 5)
 *  arr[i] = 1
 *  so sánh (Math.max(-1, 1)) -> newMax = 1
 *  arr[5] = -1 
 *  maxFromRight = 1
 * => [17,18,5,4,6,-1]
 * 
 * Vòng lặp 2 ( i = 4)
 *  arr[i] = 6
 *  so sánh (Math.max(1, 6)) -> newMax = 6 
 *  arr[4] = 1
 *  maxFromRight = 6
 * => [17,18,5,4,1,-1]
 * 
 * Vòng lặp 3 ( i = 3)
 *  arr[i] = 4
 *  so sánh (Math.max(6, 4)) -> newMax = 6
 *  arr[3] = 6
 *  maxFromRight = 6
 *  => [17,18,5,6,1,-1]
 * 
 * Vòng lặp 4 (i=2)
 *  arr[i] = 5
 *  so sánh (Math.max(6, 5)) -> newMax = 6
 *  arr[2] = 6
 *  maxFromRight = 6
 * => [17,18,6,6,1,-1]
 * 
 * Vòng lặp 5 (i=1)
 *  arr[i] = 18
 *  so sánh (Math.max(6, 16)) -> newMax = 18
 *  arr[1] = 6
 *  maxFromRight = 18
 * => [17,6,6,6,1,-1]
 * 
 * Vòng lặp 6 (i=0)
 *  arr[i] = 17
 *  so sánh (Math.max(18, 17)) -> newMax = 18
 *  arr[0]= 18
 *  maxFromRight = 18
 * => [18,6,6,6,1,-1]
 */ 