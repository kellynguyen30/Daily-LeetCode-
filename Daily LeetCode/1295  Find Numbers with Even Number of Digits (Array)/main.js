/**
 * @param {number[]} nums
 * @return {number}
 */


function countNumOfDigit (n)
{
    let countDigit = 0;








    while(n > 0)
    {
         n = Math.floor(n / 10);  /* đảm bao chia ra số nguyên */
        countDigit++
    }
    return countDigit;
}




function findNumbers (arr)
{
    let count = 0;


    for (let i = 0; i < arr.length; i++)
    {
        if (countNumOfDigit(arr[i]) % 2 === 0)
        {
            count++
        }
    }
    return count;
}
