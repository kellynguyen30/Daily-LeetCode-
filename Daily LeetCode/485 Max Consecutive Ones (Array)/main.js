/**
 * @param {number[]} nums
 * @return {number}
 */


/* Tạo 1 mảng  */
const arr = [1,1,0,1,1,1];


function max(a,b)
{
    return a > b ? a : b;
}


function findMaxConsecutiveOnes(arr)
{


    let count = 0;
    let maxCount = 0;


    for(let i = 0; i < arr.length; i++ )
     {


        if(arr[i] === 0)
        {
            count = 0;
        }
        else
        {
            count++;
            /* gọi hàm max */
            maxCount= max(maxCount, count);
        }
     }
    return maxCount;
}
