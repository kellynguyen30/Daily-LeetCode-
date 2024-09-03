/**
 * @param {number[]} arr
 * @return {boolean}
 */
// CÁCH 1:
function checkIfExist(arr) 
{
    const n = arr.length;

    for(let i = 0; i < n; i++)
    {
        for (let j = i+1; j < n; j++)
        {
            if ( (arr[i] === 2*arr[j]) || (arr[j] === 2*arr[i]) )
            
            {
                return true;

            }
        }
    }
    return false;
};


// CÁCH 2: 
/*
function checkIfExist(arr) 
 {
    const map = new Map();

    for (let i = 0; i < arr.length; i++) 
    {
        if (map.has(arr[i] * 2) || (arr[i] % 2 === 0 && map.has(arr[i] / 2))) 
        {
            return true;
        }
        map.set(arr[i], i);
    }

    return false;
}

*/ 

/** GIẢI THÍCH CÁCH 2: 
 * const arr = [10,2,5,3];
 * arr.length = 4; i lặp từ 0 đến 3
 * 
 * map:  lưu trữ các giá trị của mảng arr. cùng với chỉ số i của chúng 
 * map: giúp check xem 1 giá trị có tồn tại trong map hay không 
 * 
 * Vòng lặp 1 ( i = 0)
 * + check xem map.has(10 * 2) => tức là map.has(20) => map có chứa giá trị 20 không
 * or
 * + check xem 10%2 === 0 (có là số chẵn không) và mas.has(10/2) => tức là mas.has(5) không
 *                                                  => map có chứa giá trị 5 không
 * 
 * => có giá trị 5 
 * => return true 
 * map.set(10, 5)
 */