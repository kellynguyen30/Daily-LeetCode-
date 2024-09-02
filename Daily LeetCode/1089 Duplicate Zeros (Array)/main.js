/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */


function duplicateZeros(arr)
{
    const n = arr.length;


    for(let i = 0; i < n; i++)
    {
        if(arr[i] === 0)


        {
            // bắt đầu từ vị trí cuối mảng (n-1) và giảm dần về (i+1)
            for (let j = n-1; j > i; j-- ) 
            {				// j đang ở vị trí cuối (n-1)
               arr[j] = arr[j-1]; // lấy vị trí kế j gán cho j 
            }
            if (i+1 < n)
            {
                arr[i+1] = 0;      
            }
           
            i++;
        }
       
    }
}

/*GIẢI THÍCH CODE */ 

/**
 * Ban đầu: [1, 0, 2, 3, 0, 4, 5, 0]
 * => độ dài: 8
 * => i phải chạy từ 0 đến 7
 *
 * Vòng lặp đầu tiên (i = 0):
 *  => arr[0] không phải là 0, tiếp tục vòng lặp
 *
 * Vòng lặp thứ hai (i = 1):
 * => arr[1] là 0.
 * => Thực hiện vòng lặp nhỏ để dịch chuyển các phần tử từ vị trí 7 (n-1) đến 2 (i+1) sang phải
 *
 * j = 7: arr[7] = arr[6] -> [1, 0, 2, 3, 0, 4, 5, 5]
 * j = 6: arr[6] = arr[5] -> [1, 0, 2, 3, 0, 4, 4, 5]
 * j = 5: arr[5] = arr[4] -> [1, 0, 2, 3, 0, 0, 4, 5]
 * j = 4: arr[4] = arr[3] -> [1, 0, 2, 3, 3, 0, 4, 5]
 * j = 3: arr[3] = arr[2] -> [1, 0, 2, 2, 3, 0, 4, 5]
 * j = 2: arr[2] = arr[1] -> [1, 0, 0, 2, 3, 0, 4, 5]
 *
 * => Chèn số 0 vào vị trí 2 (i+1) -> [1, 0, 0, 2, 3, 0, 4, 5]
 * => Tăng i thêm 1 (i = 2).
 *
 * Vòng lặp tiếp theo (i = 3):
 * => arr[3] không phải là 0, tiếp tục vòng lặp.
 *
 * Vòng lặp tiếp theo (i = 4):
 * => arr[4] không phải là 0, tiếp tục vòng lặp.
 *
 * Vòng lặp tiếp theo (i = 5):
 * => arr[5] là 0.
 * => Thực hiện vòng lặp nhỏ để dịch chuyển các phần tử từ vị trí 7 (n-1) đến 6 (i+1) sang phải:
 *
 * j = 7: arr[7] = arr[6] -> [1, 0, 0, 2, 3, 0, 4, 4]
 * j = 6: arr[6] = arr[5] -> [1, 0, 0, 2, 3, 0, 0, 4]
 *
 * => Chèn số 0 vào vị trí 6 (i+1) ->  [1, 0, 0, 2, 3, 0, 0, 4]
 * => Tăng i thêm 1 (i = 6).
 *
 * Vòng lặp tiếp theo (i = 7):
 * => arr[7] không phải là 0, kết thúc vòng lặp.
 *
 * -> mảng cuối cùng là: [1, 0, 0, 2, 3, 0, 0, 4]
 */
