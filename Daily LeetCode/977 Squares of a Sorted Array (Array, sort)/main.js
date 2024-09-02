/**
 * @param {number[]} nums :
 * @return {number[]}
 */
function sortedSquares(array)
{
    const n = array.length;


  /* khởi tạo mảng v mới, cùng kích thước n với mảng array, giá trị 0*/
    const v = new Array(n).fill(0)


  // Tìm i và j:


  // Tìm i: Được khởi tạo bằng -1 và tăng dần lên để tìm phần tử âm cuối cùng trong mảng.


    let i = -1 // i bắt đầu nằm ngoài mảng, trái cùng


    /* Khi tăng dần i về bên phải, bạn muốn đảm bảo rằng vị trí (i + 1) không vượt quá
    giới hạn của mảng và vẫn là số âm */


    while( (i+1) < n && array[i+1] < 0 )  // vòng lặp:
    {
        i++
    }


    /* Tìm j: Được khởi tạo bằng n và giảm dần xuống để tìm phần tử dương đầu tiên trong mảng */


    let j = n; // j nằm ngoài mảng, phải cùng


    /* Khi j giảm dần về bên trái, bạn muốn đảm bảo rằng vị trí (j-1) vẫn nằm trong mảng
     (0 đến n-1) và j là số dương */
    while( (j-1) >=0 && array[j-1] >= 0 )  // vòng lặp
    {
        j--;
    }


    let k = 0; // k là index của mảng v mới


    // sau khi xác định được vị trí i thì dịch nó sang bên trái
    // sau khi xác định được vị trí  j thì dịch nó sang bên phải
    while(i>= 0 || j < n) // đk vòng lặp chạy hợp lệ: chỉ cần 1 trong 2 còn ở trong mảng
    {
        if (i >=0 && j <n ) //  i and j are valid ( đều nằm trong mảng)
        {
           let ii = array[i] * array[i];
           let jj = array[j] * array[j];


            if(ii <= jj )
            {
                v[k] = ii;
                i--; k++;
            }
            else
            {
                v[k] = jj;
                j++; k++;
            }
        }
        else if (i >= 0) // only i is valid (j nằm ngoài mảng, > n)
        {
            v[k] = array[i] * array[i];
            i--; k++
        }
        else // only j is valid ( i nằm ngoải mảng)
        {
            v[k] = array[j] * array[j];
            j++; k++;
        }
    }
    return v;


}
